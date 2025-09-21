import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicOnly = path === "/auth/login" || path === "/auth/signup";
  const isProtected = path === "/dashboard";
  const token = request.cookies.get("token")?.value || "";
  console.log(token, "fdsfdsf")

  // If already logged in, block access to login/signup
  if (isPublicOnly && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If trying to access protected route without token
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

}

export const config = {
  matcher: ["/", "/auth/signup", "/auth/login", "/dashboard"],
};
