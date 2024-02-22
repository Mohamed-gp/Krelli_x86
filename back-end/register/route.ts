import { NextRequest, NextResponse } from "next/server";
import { User, verifyRegister } from "../../../../models/User";
import { user } from "../../../../types/interfaces";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { error } = verifyRegister(body);
  if (error) {
    return NextResponse.json({ message: error.details[0].message },{status : 400});
  }
  const oldUser: user | null = await User.findOne({ email: body.email });
  if (oldUser) {
    return NextResponse.json({ message: "User Alredy Exist" },{status : 400});
  }

  const newUser:user = await User.create({
    ...body,
    password: await bcrypt.hash(body.password, 10),
  });
  const token = jwt.sign(
    { id: newUser._id, isAdmin: newUser.isAdmin },
    process.env.JWT_KEY,
  );

  return NextResponse.json(
    { email: newUser.email, username: newUser.username, token ,isAdmin : newUser.isAdmin},
    { status: 201 },
  );
}
