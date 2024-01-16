import connectMongoDB from "../../../../../libs/mongodb";
import { NextResponse } from "next/server";
import lesson from "../../../../../models/lessons";

interface LessonProps {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: LessonProps) {
  await connectMongoDB();
  const { id } = params;
  const lessonById = await lesson.findOne({ _id: id });
  return NextResponse.json({ lessonById }, { status: 200 });
}
