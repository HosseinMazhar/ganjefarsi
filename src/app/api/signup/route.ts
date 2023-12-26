import connectMongoDB from "../../../../libs/mongodb";
import bcrypt from "bcrypt";
import student from "../../../../models/student";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const isStudentExists = await student.findOne({ email });
    if (isStudentExists) {
        return new Response("Username already exist", { status: 400 });
    }
    await student.create({ fullName, email, password: hashedPassword });
    return NextResponse.json({ message: "User signedUp successfully." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the the student." },
      { status: 500 }
    );
  }
}
