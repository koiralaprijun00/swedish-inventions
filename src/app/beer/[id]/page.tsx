"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useCurrentUser } from "@/components/AuthProvider";
import { decrementUserBeer, fetchBeerById, fetchUserBeer, incrementUserBeer } from "@/lib/beerService";
import type { Beer, UserBeer } from "@/types/beer";

function CounterText({ count }: { count: number }) {
  if (count === 0) return <p className="text-sm text-slate-600">You haven’t logged this beer yet. First time coming up? 🍻</p>;
  if (count === 1) return <p className="text-sm text-slate-600">You’ve had this once. Just getting started. 😏</p>;
  if (count >= 5) return <p className="text-sm text-amber-700">This one’s a favorite! ⭐</p>;
  return <p className="text-sm text-slate-600">Keep sipping and see this number climb.</p>;
}

function formatTimestamp(ts?: UserBeer["lastDrunkAt"]) {
  if (!ts) return "Not yet";
  const diffMs = Date.now() - ts.toDate().getTime();
  const diffHours = Math.floor(diffMs / 3600000);
  if (diffHours < 1) return "Less than an hour ago";
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

export default function BeerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user, loading } = useCurrentUser();
  const router = useRouter();
  const [beer, setBeer] = useState<Beer | undefined>();
  const [userBeer, setUserBeer] = useState<UserBeer | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!id) return;
    fetchBeerById(id).then(setBeer);
  }, [id]);

  useEffect(() => {
    if (!user?.uid || !id) return;
    fetchUserBeer(user.uid, id).then(setUserBeer);
  }, [user?.uid, id]);

  const count = userBeer?.count ?? 0;

  const handleIncrement = async () => {
    if (!user?.uid || !beer) return;
    setBusy(true);
    try {
      const updated = await incrementUserBeer(user.uid, beer.id);
      setUserBeer(updated);
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };

  const handleDecrement = async () => {
    if (!userBeer || !user?.uid || !beer) return;
    setBusy(true);
    try {
      const updated = await decrementUserBeer(userBeer);
      setUserBeer(updated);
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };

  const avatar = useMemo(() => {
    const letter = beer?.name?.[0]?.toUpperCase() ?? "?";
    return (
      <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-semibold text-lg">
        {letter}
      </div>
    );
  }, [beer?.name]);

  return (
    <div className="flex-1">
      <AppHeader />
      <div className="max-w-md mx-auto px-4 pt-4 pb-12 flex flex-col gap-5">
        <button
          type="button"
          onClick={() => router.back()}
          className="text-amber-700 text-sm font-semibold w-fit"
          aria-label="Go back"
        >
          ← Back
        </button>

        {beer ? (
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-md border border-amber-100 flex items-center gap-3">
              {avatar}
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-slate-900">{beer.name}</h1>
                <p className="text-sm text-slate-600">
                  {[beer.style, beer.country].filter(Boolean).join(" · ") || "A tasty beer"}
                </p>
                {beer.abv && <p className="text-xs text-slate-500">ABV {beer.abv}%</p>}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500">
                <span>You’ve drunk this</span>
                <span className="text-amber-600 font-semibold">{count} times</span>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleDecrement}
                  disabled={count === 0 || busy}
                  className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 text-xl font-semibold flex items-center justify-center hover:bg-amber-200 active:scale-[0.97] disabled:opacity-50"
                  aria-label="Decrease count"
                >
                  −
                </button>
                <div className="text-5xl font-semibold text-slate-900 transition-transform" style={{ transform: busy ? "scale(1.05)" : "scale(1)" }}>
                  {count}
                </div>
                <button
                  type="button"
                  onClick={handleIncrement}
                  disabled={busy}
                  className="w-12 h-12 rounded-full bg-amber-500 text-white text-xl font-semibold flex items-center justify-center hover:bg-amber-600 active:scale-[0.97] disabled:opacity-60"
                  aria-label="Increase count"
                >
                  +
                </button>
              </div>
              <CounterText count={count} />
              <p className="text-xs text-slate-500">Last updated: {formatTimestamp(userBeer?.lastDrunkAt)}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-600">Loading beer details…</p>
        )}
      </div>
    </div>
  );
}
