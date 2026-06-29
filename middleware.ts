import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_HOST } from "@/lib/site";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (host === `www.${SITE_HOST}`) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = SITE_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
