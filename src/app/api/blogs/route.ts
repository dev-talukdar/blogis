import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ messages: "Hello from Blog Api" });
};
