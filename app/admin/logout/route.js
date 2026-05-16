import { NextResponse } from "next/server";

import { clearSessionCookie } from "@/lib/auth";

export async function GET(request) {
  const response = NextResponse.redirect(new URL("/login", request.url), { status: 303 });

  clearSessionCookie(response);

  return response;
}