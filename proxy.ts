import { NextResponse, type NextRequest } from "next/server";

/**
 * Holding-page mode.
 *
 * While the new site is being finished, the only publicly reachable route is
 * the holding page at "/". Everything else (/home, /about, /book, /admin, …)
 * is redirected back to it.
 *
 * To take the site live: delete this file, drop HOLDING_MODE / PREVIEW_SECRET
 * from the environment, and restore the full route list in app/sitemap.ts plus
 * the `robots` metadata in app/(site)/layout.tsx.
 *
 *   HOLDING_MODE unset  -> on in production, off in local dev
 *   HOLDING_MODE=1      -> force on  (useful for testing the gate locally)
 *   HOLDING_MODE=0      -> force off (site fully public)
 */
const holdingMode = (() => {
  switch (process.env.HOLDING_MODE) {
    case "1":
      return true;
    case "0":
      return false;
    default:
      return process.env.NODE_ENV === "production";
  }
})();

/** Visiting any page with ?preview=<secret> unlocks the full site via cookie. */
const PREVIEW_SECRET = process.env.PREVIEW_SECRET?.trim();
const PREVIEW_COOKIE = "layan_preview";
const PREVIEW_PARAM = "preview";

/**
 * Routes that stay public even while the holding page is up.
 *
 * "/cancel" matters: booking confirmation emails contain a /cancel/<token>
 * link (see lib/booking/email.ts). Those links are already in customers'
 * inboxes, so blocking them would strand a real booking with no way to cancel.
 */
const PUBLIC_PREFIXES = ["/cancel"];

const isPublic = (pathname: string) =>
  pathname === "/" ||
  PUBLIC_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

export function proxy(request: NextRequest) {
  if (!holdingMode) return NextResponse.next();

  const { pathname, searchParams } = request.nextUrl;

  // 1. Unlock: ?preview=<secret> sets the bypass cookie, then reloads the same
  //    URL without the query string so the secret doesn't linger in the address
  //    bar, browser history, or any outbound Referer header.
  if (PREVIEW_SECRET && searchParams.get(PREVIEW_PARAM) === PREVIEW_SECRET) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete(PREVIEW_PARAM);

    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(PREVIEW_COOKIE, PREVIEW_SECRET, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  }

  // 2. Already unlocked on this browser.
  if (
    PREVIEW_SECRET &&
    request.cookies.get(PREVIEW_COOKIE)?.value === PREVIEW_SECRET
  ) {
    return NextResponse.next();
  }

  // 3. Always-public routes.
  if (isPublic(pathname)) return NextResponse.next();

  // 4. Everything else goes back to the holding page. 307, never 308: a
  //    permanent redirect gets cached by browsers and would keep sending
  //    visitors to "/" long after this file is deleted.
  return NextResponse.redirect(new URL("/", request.url), 307);
}

export const config = {
  matcher: [
    // Everything except Next internals, metadata routes, and static assets
    // (anything with a file extension, e.g. /layan-logo.jpg).
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|opengraph-image|.*\\.[^/]+$).*)",
  ],
};
