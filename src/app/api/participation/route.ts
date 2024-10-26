export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { course, step } = body;

  // コースとステップが必要かをチェック
  if (!course || step === undefined) {
    return NextResponse.json({ error: 'Course and step are required' }, { status: 400 });
  }

  try {
    // 指定されたコースとステップのエントリを検索
    const existingParticipation = await prisma.participation.findFirst({
      where: {
        course,
        step,
      },
    });

    if (existingParticipation) {
      // 既存のエントリがあれば、カウントを増やす
      const updatedParticipation = await prisma.participation.update({
        where: { id: existingParticipation.id }, // 既存のIDを使って更新
        data: { count: { increment: 1 } },
      });
      return NextResponse.json(updatedParticipation);
    } else {
      // 新しいエントリを作成
      const newParticipation = await prisma.participation.create({
        data: { course, step, count: 1 },
      });
      return NextResponse.json(newParticipation);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update participation' }, { status: 500 });
  }
}
