import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/about", "/products", "/Dashboard"];

export const middleware = (req: NextRequest, res: NextResponse) => {
  const path = req.nextUrl.pathname;
  if (!protectedRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.next();
  }
  const cookie = req.cookies.get("auth_token");
  const token = cookie?.value;
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next()
};

export const config = {
  matcher: ["/about/:path*","/Dashboard", "/Dashboard/:path*", "/products/:path*"],
};