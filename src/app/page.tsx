"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useCurrentUser } from "@/components/AuthProvider";
import { fetchBeers, fetchUserBeerStats } from "@/lib/beerService";
import type { Beer, UserBeer } from "@/types/beer";

function formatRelativeTime(timestamp?: UserBeer["lastDrunkAt"]) {
  if (!timestamp) return "Not yet";
  const diffMs = Date.now() - timestamp.toDate().getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} min ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

function Landing() {
  return (
    <div className="px-4 pb-10 pt-6 flex flex-col gap-6 max-w-md mx-auto">
      <div className="text-center flex flex-col gap-2">
        <p className="text-amber-700 font-semibold flex items-center justify-center gap-2 text-sm">
          🍺 BeerCount
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
          How many beers have you <span className="text-amber-600">really</span> drunk?
        </h1>
        <p className="text-slate-600 text-sm">
          Track every beer you’ve tasted. See your stats. Celebrate new finds.
        </p>
      </div>

      <div className="gradient-accent rounded-3xl p-[1px]">
        <div className="rounded-3xl bg-white p-6 flex flex-col gap-3 card-shadow">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl">🍻</div>
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-700">You could be tracking this 👇</p>
              <p className="text-sm text-slate-500">Beer stats that update in real-time.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center mt-2">
            <div className="rounded-2xl bg-amber-50 px-3 py-2">
              <p className="text-xs text-slate-500">🍺 Beers</p>
              <p className="text-xl font-semibold text-amber-700">42</p>
            </div>
            <div className="rounded-2xl bg-teal-50 px-3 py-2">
              <p className="text-xs text-slate-500">🧩 Unique</p>
              <p className="text-xl font-semibold text-teal-700">17</p>
            </div>
            <div className="rounded-2xl bg-lime-50 px-3 py-2">
              <p className="text-xs text-slate-500">🌍 Countries</p>
              <p className="text-xl font-semibold text-lime-700">6</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href="/signup"
          className="w-full rounded-full bg-amber-500 text-white font-semibold py-3 text-sm shadow-sm hover:bg-amber-600 active:scale-[0.98] transition text-center"
        >
          Get started
        </Link>
        <Link
          href="/login"
          className="w-full rounded-full border border-amber-200 text-amber-700 font-medium py-3 text-sm bg-amber-50 hover:bg-amber-100 text-center"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

function Dashboard({ userId, userEmail, beers }: { userId: string; userEmail: string; beers: Beer[] }) {
  const [userBeers, setUserBeers] = useState<UserBeer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const stats = await fetchUserBeerStats(userId);
      setUserBeers(stats);
      setLoading(false);
    };
    load();
  }, [userId]);

  const totals = useMemo(() => {
    const totalDrunk = userBeers.reduce((sum, b) => sum + b.count, 0);
    const uniqueBeers = userBeers.length;
    return { totalDrunk, uniqueBeers };
  }, [userBeers]);

  const recent = useMemo(() => {
    return userBeers
      .filter((b) => b.lastDrunkAt)
      .slice(0, 6)
      .map((ub) => ({
        ...ub,
        beer: beers.find((b) => b.id === ub.beerId),
      }));
  }, [userBeers, beers]);

  return (
    <div className="px-4 pb-16 pt-4 max-w-md mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-amber-700 font-semibold">Hi, {userEmail} 👋</p>
        <p className="text-slate-600 text-sm">Here’s your beer journey.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-4 shadow-md border border-amber-100">
          <p className="text-xs text-slate-500 flex items-center gap-1">🍺 Total drunk</p>
          <p className="text-3xl font-semibold text-amber-700 mt-1">{loading ? "--" : totals.totalDrunk}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-md border border-teal-100">
          <p className="text-xs text-slate-500 flex items-center gap-1">🧩 Unique beers</p>
          <p className="text-3xl font-semibold text-teal-700 mt-1">{loading ? "--" : totals.uniqueBeers}</p>
        </div>
      </div>

      <Link
        href="/search"
        className="w-full rounded-full bg-amber-500 text-white font-semibold py-3 text-sm shadow-sm hover:bg-amber-600 active:scale-[0.98] transition text-center"
      >
        + Add a beer I drank
      </Link>

      <div className="rounded-2xl bg-white p-4 shadow-md border border-amber-100 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold flex items-center gap-2">Recent beers 🍻</h2>
          <Link href="/search" className="text-sm text-amber-700 font-medium">
            View all
          </Link>
        </div>
        {loading && <p className="text-sm text-slate-500">Loading your beers…</p>}
        {!loading && userBeers.length === 0 && (
          <div className="text-sm text-slate-600 bg-amber-50 rounded-xl p-3">
            No beers tracked yet. Start your journey 🍺
            <div className="mt-3">
              <Link
                href="/search"
                className="w-full rounded-full border border-amber-200 text-amber-700 font-medium py-2 px-3 text-sm bg-white hover:bg-amber-50 inline-block text-center"
              >
                Add your first beer
              </Link>
            </div>
          </div>
        )}
        {!loading && recent.length > 0 && (
          <div className="flex flex-col gap-3">
            {recent.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-100 p-3 flex items-center justify-between hover:-translate-y-[2px] transition"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">{item.beer?.name ?? "Unknown beer"}</p>
                  <p className="text-xs text-slate-500">Last drunk: {formatRelativeTime(item.lastDrunkAt)}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                  × {item.count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const { user, loading } = useCurrentUser();
  const router = useRouter();
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    fetchBeers().then(setBeers);
  }, []);

  useEffect(() => {
    if (!loading && !user) return;
    if (!loading && user) router.prefetch("/search");
  }, [loading, user, router]);

  return (
    <div className="flex-1">
      <AppHeader />
      {user ? (
        <Dashboard userId={user.uid} userEmail={user.email ?? "Beer fan"} beers={beers} />
      ) : loading ? (
        <div className="px-4 py-10 text-center text-sm text-slate-500">Loading…</div>
      ) : (
        <Landing />
      )}
    </div>
  );
}
