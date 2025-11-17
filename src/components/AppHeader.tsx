"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/authActions";
import { useCurrentUser } from "@/components/AuthProvider";

export function AppHeader() {
  const { user } = useCurrentUser();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const initial = user?.email?.[0]?.toUpperCase();

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-amber-50/80 border-b border-amber-100">
      <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-amber-700 flex items-center gap-2">
          <span className="text-xl">🍺</span>
          BeerCount
        </Link>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-semibold text-sm">
                {initial || "?"}
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm text-amber-700 font-medium rounded-full border border-amber-200 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-sm text-amber-700 font-medium rounded-full border border-amber-200 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 transition"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
