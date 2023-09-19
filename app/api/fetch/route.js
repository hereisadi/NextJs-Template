import connectToDb from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  connectToDb();
  return NextResponse.json({ message: "get working" });
}
