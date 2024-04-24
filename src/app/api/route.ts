import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ messages: "Hello from server side" });
};
export const POST = async (request: Request) => {
  return NextResponse.json({ messages: "Hello from server side" });
};
export const DELETE = async () => {
  return NextResponse.json({ messages: "Hello from server side" });
};
export const PUT = async () => {
  return NextResponse.json({ messages: "Hello from server side" });
};
export const PATCH = async () => {
  return NextResponse.json({ messages: "Hello from server side" });
};
