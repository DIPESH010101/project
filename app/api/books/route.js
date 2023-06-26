import Book from "@/models/Book";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const res = await Book.find();
    return NextResponse.json(res);
  } catch (e) {
    console.log(e);
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const req = await request.json();
    // console.log(req);
    const res = await Book.create(req);
    return NextResponse.json({ res }, { status: 201 });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
