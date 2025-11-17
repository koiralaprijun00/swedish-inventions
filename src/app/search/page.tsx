"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useCurrentUser } from "@/components/AuthProvider";
import { fetchBeers, fetchUserBeerStats, incrementUserBeer } from "@/lib/beerService";
import type { Beer, UserBeer } from "@/types/beer";

export default function SearchPage() {
  const { user, loading } = useCurrentUser();
  const router = useRouter();
  const [beers, setBeers] = useState<Beer[]>([]);
  const [userBeers, setUserBeers] = useState<UserBeer[]>([]);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);

  useEffect(() => {
    fetchBeers().then(setBeers);
  }, []);

  useEffect(() => {
    const load = async () => {
      if (!user?.uid) return;
      const stats = await fetchUserBeerStats(user.uid);
      setUserBeers(stats);
    };
    load();
  }, [user?.uid]);

  const list = useMemo(() => {
    const lower = query.trim().toLowerCase();
    if (!lower) return beers;
    return beers.filter((beer) => beer.name.toLowerCase().includes(lower));
  }, [beers, query]);

  const getCount = (beerId: string) => userBeers.find((b) => b.beerId === beerId)?.count ?? 0;

  const handleAdd = async (beerId: string) => {
    if (!user?.uid) return;
    setMessage(null);
    const existing = userBeers.find((b) => b.beerId === beerId);
    const optimistic: UserBeer =
      existing ?? {
        id: `temp-${beerId}`,
        beerId,
        userId: user.uid,
        count: 0,
      };
    const updatedList = userBeers.filter((b) => b.beerId !== beerId);
    setUserBeers([...updatedList, { ...optimistic, count: optimistic.count + 1 }]);
    try {
      const result = await incrementUserBeer(user.uid, beerId);
      setUserBeers((prev) => [...prev.filter((b) => b.beerId !== beerId), result]);
      setMessage("+1 🍺 Added to your count!");
      setTimeout(() => setMessage(null), 2000);
    } catch (error) {
      console.error(error);
      setMessage("Could not add beer. Check your connection.");
      setUserBeers(updatedList);
    }
  };

  return (
    <div className="flex-1">
      <AppHeader />
      <div className="max-w-md mx-auto px-4 pt-4 pb-12 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-amber-700 font-semibold"
            aria-label="Go back"
          >
            ← Back
          </button>
          <span className="text-slate-400">/</span>
          <span className="font-semibold text-slate-900">Find a beer</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">Find a beer 🔍</h1>
        <p className="text-sm text-slate-600">Tap “I drank this” every time you drink it.</p>

        <div className="rounded-full border border-amber-200 bg-white px-4 py-3 shadow-sm flex items-center gap-3">
          <span className="text-lg">🔎</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name… (Guinness, Heineken, IPA…)"
            className="flex-1 bg-transparent focus:outline-none text-sm"
          />
        </div>

        {message && <div className="text-sm text-amber-800 bg-amber-100 rounded-xl px-3 py-2">{message}</div>}

        <div className="flex flex-col gap-3 mt-2">
          {list.map((beer) => {
            const count = getCount(beer.id);
            const color =
              beer.style?.toLowerCase().includes("ipa")
                ? "text-teal-500"
                : beer.style?.toLowerCase().includes("lager")
                ? "text-amber-500"
                : "text-orange-500";
            return (
              <div
                key={beer.id}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 flex items-center gap-3 hover:-translate-y-[2px] transition"
              >
                <div className="w-2 self-stretch rounded-full" style={{ backgroundColor: "transparent" }}>
                  <span className={`badge-dot ${color} inline-block`} aria-hidden />
                </div>
                <div className="flex-1" onClick={() => router.push(`/beer/${beer.id}`)}>
                  <p className="font-semibold text-slate-900">{beer.name}</p>
                  <p className="text-xs text-slate-500">
                    {[beer.style, beer.country].filter(Boolean).join(" · ") || "Tap to open"}
                  </p>
                </div>
                {count === 0 ? (
                  <button
                    type="button"
                    onClick={() => handleAdd(beer.id)}
                    className="rounded-full border border-amber-200 text-amber-700 font-medium py-2 px-4 text-xs bg-amber-50 hover:bg-amber-100"
                  >
                    I drank this
                  </button>
                ) : (
                  <div className="flex flex-col items-end gap-1">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">× {count}</span>
                    <button
                      type="button"
                      onClick={() => handleAdd(beer.id)}
                      className="text-xs text-amber-700 font-medium"
                    >
                      + add
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          {list.length === 0 && (
            <p className="text-sm text-slate-500">No beers match that search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
