import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const alreadyExists = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (alreadyExists) {
    return NextResponse.json(
      { message: `User already exists with ${body.email}` },
      { status: 400 }
    );
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(user.id, { status: 201 });
}
