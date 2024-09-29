import { prisma } from "@/services/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const name = body.name as string;
  const fileId = body.fileId as string;

  try {
    const person = await prisma.person.create({
      data: { name, photo: fileId },
    });

    return NextResponse.json({ person }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
