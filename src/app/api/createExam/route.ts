import connectMongoDB from "../../../../libs/mongodb";
import exam from "../../../../models/exams";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, deadline, questions } = body;
        await connectMongoDB();
        await exam.create({ title, deadline, questions });
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