import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {

  const prisma = new PrismaClient();
  const poems = await prisma.poem.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(poems);
}

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const { title, author, content } = await request.json();

  if (!title || !author || !content) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const poem = await prisma.poem.create({
    data: {
      title,
      author,
      content,
    },
  });

  return NextResponse.json(poem, { status: 201 });
};
