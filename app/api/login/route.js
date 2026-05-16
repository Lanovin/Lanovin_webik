import { NextResponse } from "next/server";

import { setSessionCookie, verifyUser } from "@/lib/auth";

export async function POST(request) {
  const formData = await request.formData();
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const user = await verifyUser(username, password);

  if (!user) {
    return NextResponse.redirect(new URL("/login?error=1", request.url), { status: 303 });
  }

  const target = user.role === "admin" ? "/admin" : "/";
  const response = NextResponse.redirect(new URL(target, request.url), { status: 303 });

  setSessionCookie(response, user);

  return response;
}