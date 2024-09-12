import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { path } from "@/path";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(path.home, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/:path*"],
};
