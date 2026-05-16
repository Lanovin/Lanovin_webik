import { NextResponse } from "next/server";

import { getSession } from "@/lib/auth";
import { saveContent } from "@/lib/content";

export async function POST(request) {
  const session = await getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url), { status: 303 });
  }

  if (session.role !== "admin") {
    return new NextResponse("Nemáte oprávnění pro přístup do administrace.", {
      status: 403,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  const formData = await request.formData();
  await saveContent(Object.fromEntries(formData.entries()));

  return NextResponse.redirect(new URL("/admin", request.url), { status: 303 });
}