import connectMongoDB from "../../../../libs/mongodb";
import bcrypt from "bcrypt";
import user from "../../../../models/users";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password, classNumber, grade, role } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const isUserExists = await user.findOne({ email });
    if (isUserExists) {
        return new Response("Username already exist", { status: 400 });
    }
    await user.create({ fullName, email, password: hashedPassword, classNumber, grade, role });
    return NextResponse.json({ message: "User signedUp successfully." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the the user." },
      { status: 500 }
    );
  }
}
