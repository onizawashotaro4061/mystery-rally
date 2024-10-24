// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // これは正しいインポートです
import StoryComponent from '@/app/components/StoryComponent';

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = '迷Q伝説';

  // ストーリーと画像の配列
  const stories = [
    {
      text: '正解\n\n',
      image: '/images/answer2.png',
    },
    {
      text: '魔導書に文字が浮かび上がった。ここに書かれているのは…。「雄大なる氷の精霊にして天を潤わせし氷帝よ！」そう唱えると、魔導書は魔術を放ち大蛇を凍らせた。\n\n',
      image: '/images/boss.png',
      overlayImage: '/images/MagicBook.png',
    },
    {
      text: '大蛇に勝てたようだ！勝った安心感からか、だんだん眠くなってきた…。\n\n',
      image: '/images/boss.png',
    },
    {
      text: 'ここは…。目が覚めると、元いた世界のベッドの上に寝ていた。なんだ、あれは夢だったのか。 \n\n',
      image: '/images/room.jpg',
    },
    { 
      text: 'ゴール教室（メディア棟M512教室）に行って、最後のキーワードを手に入れよう！',
      image: '/images/room.jpg',
     participationStatus: true,
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
    router.push('/click-counter');
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
