// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponent from '@/app/components/StoryComponent';

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = '舞';


  // ストーリーと画像の配列
  const stories = [
    {
      text: '威力を倍増してくれる杖を手に入れた！これで強い敵にも立ち向かえる。 \n\n',
      image: '/images/MagicRoom.png',
      overlayImage: '/images/cane_blue.png',
    },
    {
      text: '奥に進んでいくと、大きな門が見えてきた。この門はなんだろう？門を開けると、中から熱風が押し寄せてきた！\n\n',
      image: '/images/gate.jpg',
    },
    {
      text: 'ここはボス部屋だ！中には炎をまとった大蛇がいた！さっき手に入れた威力を倍増してくれる杖で攻撃する！\n\n',
      image: '/images/boss.png',
    },
    {
      text: 'しかし、大蛇はまとった炎でバリアを作り、攻撃を防御された…。ん？よく見ると、バリアに謎が書いてある！あの謎を解けば、バリアを壊せるかもしれない！\n\n',
      image: '/images/boss.png',
    },
    { 
      text: 'メディア棟のM405教室へ行って、キーワードを手に入れよう！',
      image: '/images/boss.png',
      participationStatus: true, // 修正: プロパティ名を変更
    }
  ];

  const handleParticipation = async (participated: boolean) => {
    setHasParticipated(participated);
    await fetch('/api/participation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: 'A',
        step: 1,
        participated: participated,
      }),
    });
  };

  const handleNext = () => {
    // ページ遷移処理
    router.push('/quiz/courseA16');
  };


  const participationLabel = "〇〇"; // ここで企画名を設定
  return (
    <div>
      {/* ストーリーコンポーネントの呼び出し */}
      <StoryComponent
        stories={stories}
        onParticipationChange={handleParticipation}
        onParticipationConfirmed={() => console.log('参加が確認されました')}
        correctKeyword={correctKeyword}
        course="A" // courseを指定
        step={5}   // stepを指定
        onNext={handleNext} // onNext関数を渡す
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;
