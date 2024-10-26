// src/pages/api/keywords.ts
export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export async function POST(request: Request) {
  const body = await request.json();
  const { keyword, course, step } = body;

  // バリデーション
  if (!keyword || !course || step === undefined) {
    return NextResponse.json({ error: 'Keyword, course, and step are required' }, { status: 400 });
  }

  try {
    // まずは、指定されたコースとステップのエントリを検索
    const existingAttempt = await prisma.keywordAttempt.findFirst({
      where: {
        course,
        step,
      },
    });

    if (existingAttempt) {
      // 既存のエントリがあれば、カウントを増やす
      const updatedAttempt = await prisma.keywordAttempt.update({
        where: { id: existingAttempt.id }, // 既存のIDを使って更新
        data: { attempts: { increment: 1 } },
      });
      return NextResponse.json(updatedAttempt);
    } else {
      // 新しいエントリを作成
      const newAttempt = await prisma.keywordAttempt.create({
        data: { course, step, attempts: 1 },
      });
      return NextResponse.json(newAttempt);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update keyword attempt' }, { status: 500 });
  }
}
