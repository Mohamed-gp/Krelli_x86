import { NextRequest, NextResponse } from "next/server";
import { User, verifyLogin } from "../../../../models/User";
import bcrypt from "bcryptjs";
import { user } from "../../../../types/interfaces";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { error } = verifyLogin(body);
  if (error) {
    return NextResponse.json(
      { message: error.details[0].message },
      { status: 400 },
    );
  }
  const oldUser: user | null = await User.findOne({ email: body.email });
  if (!oldUser) {
    return NextResponse.json(
      { message: "user doesn't exist" },
      { status: 400 },
    );
  }
  const matchedPassword = await bcrypt.compare(body.password, oldUser.password);
  if (!matchedPassword) {
    return NextResponse.json(
      { message: "email or password are incorrect" },
      { status: 400 },
    );
  }
  const token = jwt.sign(
    { isAdmin: oldUser.isAdmin, id: oldUser._id },
    process.env.JWT_KEY,
  );
  return NextResponse.json(
    {
      email: oldUser.email,
      username: oldUser.username,
      isAdmin: oldUser.isAdmin,
      token
    },
    { status: 200 },
  );
}
