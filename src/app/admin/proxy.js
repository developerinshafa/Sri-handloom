import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(request) {
  const token = request.cookies.get("token")?.value;
  const loginUrl = new URL("/login", request.url);
  const forbidderUrl = new URL("/", request.url)};

  // No token → redirect to login
  if (!token) { return NextResponse.redirect(loginUrl);

  try {
    // Correct way to encode secret
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    // Verify token
    const { payload } = await jwtVerify(token, secret);

    // Check admin route
    if (request.nextUrl.pathname.startsWith("/admin")) {
      //  Not admin → redirect to home
      if (payload.role !== "admin") {
        return NextResponse.redirect(forbidderUrl);
      }
    }

    //  Allow request
    return NextResponse.next();
  } catch {
    // console.error("JWT Error:", error);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};