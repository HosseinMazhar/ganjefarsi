import connectMongoDB from "../../../../libs/mongodb";
import lesson from "../../../../models/lessons";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, paragraph } = body;
    await connectMongoDB();
    await lesson.create({ title, paragraph });
    return NextResponse.json(
      { message: "lesson successfully added" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while sharing the post." },
      { status: 500 }
    );
  }
}
