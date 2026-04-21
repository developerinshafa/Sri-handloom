import { NextResponse } from "next/server";

export function middleware(req) {
const token = request.coolie.get("token")?.value;
console.log("Middleware check for Token:", token);

// console.log("Middleware check for Token:", token);

if (!token) {
  const loginUrl = new URL("/login", req.url);
  return NextResponse.redirect(loginUrl);
}
return NextResponse.next();
}

export const config = {
 matcher: ["/dashboard/:path*", "/productsList/:path*"],
};