export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { gender, age } = body;

  // 性別と年齢が必要かをチェック
  if (!gender || age === undefined) {
    return NextResponse.json({ error: '性別と年齢は必須です。' }, { status: 400 });
  }

  try {
    // 新しいエントリを作成
    const newGenderAge = await prisma.genderAge.create({
      data: {
        gender,
        age: parseInt(age, 10), // 年齢を整数に変換
      },
    });

    return NextResponse.json(newGenderAge, { status: 201 }); // 作成したエントリを返す
  } catch (error) {
    console.error('エラー:', error); // エラーをコンソールに出力
    return NextResponse.json({ error: '性別と年齢の保存に失敗しました。' }, { status: 500 });
  }
}
