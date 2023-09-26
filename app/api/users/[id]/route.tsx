import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (user) {
    return NextResponse.json(user, { status: 404 });
  } else {
    return NextResponse.json(
      { message: `User does not exist with ${params.id}` },
      { status: 404 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ message: "Name required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json(
      { message: `User does not exist with ${params.id}` },
      { status: 404 }
    );
  }

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json(
      { message: `User does not exist with ${params.id}` },
      { status: 404 }
    );
  }

  await prisma.user.delete({ where: { id: parseInt(params.id) } });

  return NextResponse.json({ message: "User deleted" }, { status: 200 });
}