// src/app/api/click/route.ts
export const runtime = 'edge';

export const config = {
  runtime: 'nodejs',
};

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(request: Request) {
  const body = await request.json();
  const { course } = body;

  if (course !== 'A' && course !== 'B') {
    return NextResponse.json({ error: 'Invalid course' }, { status: 400 });
  }

  try {
    const click = await prisma.click.upsert({
      where: { id: course === 'A' ? 1 : 2 }, // Aコースはid=1、Bコースはid=2
      update: { count: { increment: 1 } },
      create: { count: 1, course: course }, // labelは適宜使用
    });

    return NextResponse.json({ count: click.count });
  } catch {
    return NextResponse.json({ error: 'Failed to update click count' }, { status: 500 });
  }
}
