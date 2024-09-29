import path from "node:path";
import { writeFile } from "node:fs/promises";
import { v4 as uuid } from "uuid";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const image = formData.get("image") as File;
  if (!image) {
    return NextResponse.json({ error: "No image provided." }, { status: 400 });
  }

  const buffer = Buffer.from(await image.arrayBuffer());
  const fileId = uuid();
  const ext = path.extname(image.name);

  try {
    await writeFile(
      path.join(process.cwd(), "public/users", `${fileId}${ext}`),
      buffer
    );
    return NextResponse.json({ id: fileId }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error uploading image.", details: err },
      { status: 500 }
    );
  }
}
