import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("=== CLIENT-SIDE ERROR LOGGED ===");
    console.log(`Source: ${body.source || "unknown"}`);
    console.log(`Message: ${body.message}`);
    console.log(`URL: ${body.url}`);
    console.log(`Line: ${body.line}, Column: ${body.col}`);
    console.log(`Stack: ${body.stack}`);
    console.log("=================================");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to parse client error log:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
