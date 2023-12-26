import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import student from "../../../../models/student";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;
  if (!email || !password) {
    return NextResponse.json({ msg: "invalid fields" }, { status: 400 });
  }
  await connectMongoDB();
  try {
    const isStudentfounded = await student
      .findOne({ email })
      .select("+password");
    if (!isStudentfounded) {
      return NextResponse.json(
        { msg: "User is not available" },
        { status: 409 }
      );
    }
    const validPassword = await bcrypt.compare(password, isStudentfounded.password);
    if (!validPassword) {
      return new Response("Incorrect Password", { status: 400 });
    }

    const tokenData = {
      fullName: isStudentfounded.fullName,
      id: isStudentfounded._id,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRETKEY ?? "", {
      expiresIn: "1h",
    });
    if(!token) {
      return new Response("empty token")
    }
    const response = NextResponse.json({ message: "Login successfull" });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err, success: false }, { status: 500 });
  }
}
