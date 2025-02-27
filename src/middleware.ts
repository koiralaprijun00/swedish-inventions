import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

export function middleware(request: NextRequest) {
  const locales = ["en", "sv"];
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const pathname = request.nextUrl.pathname;
  
  // Extract locale from pathname (if present)
  const pathLocale = pathname.split("/")[1];

  let locale = locales.includes(pathLocale) ? pathLocale : cookieLocale || "en";

  // If no locale in the path but cookie exists, redirect to the stored locale
  if (!locales.includes(pathLocale)) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // Store the selected locale in a cookie
  const response = createMiddleware(routing)(request);
  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });

  return response;
}

export const config = {
  matcher: ["/", "/(sv|en)/:path*"],
};
