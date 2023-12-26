import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import user from "../../../../models/users";
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
    const isUserfounded = await user
      .findOne({ email })
      .select("+password");
    if (!isUserfounded) {
      return NextResponse.json(
        { msg: "User is not available" },
        { status: 409 }
      );
    }
    const validPassword = await bcrypt.compare(
      password,
      isUserfounded.password
    );
    if (!validPassword) {
      return new Response("Incorrect Password", { status: 400 });
    }

    const tokenData = {
      fullName: isUserfounded.fullName,
      id: isUserfounded._id,
    };

    if (process.env.JWT_SECRETKEY) {
      const token = jwt.sign(tokenData, process.env.JWT_SECRETKEY, {
        expiresIn: "2h",
      });
      if (!token) {
        return new Response("empty token");
      }
      const response = NextResponse.json({ message: "Login successfull" });
      response.cookies.set("token", token, { httpOnly: false });
      return response;
    } else {
      return NextResponse.json({ msg: "invalid JWT Key" }, { status: 400 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err, success: false }, { status: 500 });
  }
}
