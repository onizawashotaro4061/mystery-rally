"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponent from '@/app/components/StoryComponent';

const QuizCourseA: React.FC = () => {
  const [hasParticipated, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = '読み聞かせ';

  const stories = [
    {
      text: '正解\n\n',
      image: '/images/A1a.jpg',
    },
    {
      text: '宝箱が開いた！中から謎の魔導書が出てきた。強い魔術が書かれていそうだ。しかし、固く閉ざされていて開かない！とりあえず先に進もう。 \n\n',
      image: '/images/cave.png',
      overlayImage: '/images/MagicBook.png',
    },
    {
      text: '歩いていると、誰かが住んでいたような部屋を見つけた。\n\n',
      image: '/images/MagicRoom.png',
    },
    {
      text: '何かないか探してみると、魔術の威力を上げる杖を見つけた！しかし、杖は封印されているようだ。封印を解くために謎を解こう！\n\n',
      image: '/images/MagicRoom.png',
      overlayImage: '/images/cane_purple.png',
    },
    {
      text: 'メディア棟のM516教室へ行って、キーワードを手に入れよう！',
      image: '/images/MagicRoom.png',
      overlayImage: '/images/chest.png',
      participationStatus: true,
    },
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
        step: 3,
        participated: participated,
      }),
    });
  };

  const handleNext = async () => {
    // キーワードを Supabase に記録
    await fetch('/api/keyword-attempt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: 'A', // コース名を指定
        step: 3, // ステップを指定
      }),
    });

    router.push('/quiz/courseA14');
  };

  const participationLabel = "〇〇"; // ここで企画名を設定

  return (
    <div>
      <StoryComponent
        stories={stories}
        onParticipationChange={handleParticipation}
        onParticipationConfirmed={() => console.log('参加が確認されました')}
        correctKeyword={correctKeyword}
          course="A" // courseを指定
        step={3}   // stepを指定
        onNext={handleNext} // onNext関数を渡す
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;
