import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: Request) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET});

    const pathname = new URL(req.url).pathname;

    if (!token && pathname.startsWith("/protected")) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }

    return NextResponse.next();
} 

export const config = {
    matcher: ["/protected/:path*"],
};