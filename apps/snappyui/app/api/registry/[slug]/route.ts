"use server";

import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

async function fetchData(slug: string) {
  try {
    const response = await fetch(`https://ajay-snappy-ui.s3.us-east-1.amazonaws.com/${slug}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }
  const cardData = await fetchData(slug);
  if ("error" in cardData) {
    return Response.json({ error: cardData.error }, { status: 500 });
  }
  return NextResponse.json(cardData);
}
