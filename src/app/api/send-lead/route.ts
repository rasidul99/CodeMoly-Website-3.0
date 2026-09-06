import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@/payload.config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const payload = await getPayload({ config });
    const lead = await payload.create({
      collection: "leads",
      data: {
        name: name || "Anonymous",
        email,
        message: message || "",
        status: "new",
      },
    });

    console.log("=== NEW LEAD CREATED ===");
    console.log(`Name: ${lead.name}`);
    console.log(`Email: ${lead.email}`);
    console.log(`Status: ${lead.status}`);
    console.log("=========================");

    return NextResponse.json({ success: true, lead });
  } catch (err: any) {
    console.error("Failed to save lead submission:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
