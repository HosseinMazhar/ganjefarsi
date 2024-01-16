import connectMongoDB from "../../../../../libs/mongodb";
import { NextResponse } from "next/server";
import exam from "../../../../../models/exams";

interface ExamProps {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: ExamProps) {
  await connectMongoDB();
  const { id } = params;
  const examById = await exam.findOne({ _id: id });
  return NextResponse.json({ examById }, { status: 200 });
}
