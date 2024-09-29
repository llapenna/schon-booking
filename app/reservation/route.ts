import { prisma } from "@/services/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const date = new Date(body.date);
  const notes = body.notes as string;
  const people = body.people as string[];

  try {
    const user = await prisma.reservation.create({
      data: {
        date,
        notes,
        people: {
          connect: people.map((id) => ({ id: Number(id) })),
        },
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        people: true,
      },
    });

    return NextResponse.json({ reservations });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
