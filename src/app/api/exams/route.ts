import connectMongoDB from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import exam from "../../../../models/exams";

export async function GET() {
    await connectMongoDB();
    const exams = await exam.find()
    return NextResponse.json({exams})
}