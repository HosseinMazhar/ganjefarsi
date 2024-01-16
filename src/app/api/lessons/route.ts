import connectMongoDB from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import lesson from "../../../../models/lessons";

export async function GET() {
    await connectMongoDB();
    const lessons = await lesson.find()
    return NextResponse.json({lessons})
}