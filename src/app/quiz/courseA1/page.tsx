// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponent from '@/app/components/StoryComponent';

interface Story {
  text: string;
  image: string;
  overlayImage?: string;
  participationStatus?: boolean;
}

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = '白地図';
   

  // ストーリーと画像の配列
  const stories: Story[] = [
    {
      text: 'どこからか声が聞こえる…。「雄大なる氷の精霊――」何かはわからないが、そろそろ起きよう。\n\n',
      image: '/images/king.png',
    },
    {
      text: '目が覚めたら、異世界の知らない王国の宿にいた。\nとりあえず街へ出たところ、「別世界へ行けるアイテムが迷宮にある」という噂を聞いた。\nそのアイテムを手に入れれば、元の世界へ戻れるかもしれない！\n魔術を覚えて、装備を整えて、いざ、迷宮へ！ \n\n',
      image: '/images/king.png',
    },
    {
      text: '迷宮に到着した。少し進むと、目の前に大きなスライムが現れた！',
      image: '/images/cave.png',
    },
    {
      text: '街で覚えた氷の魔術でスライムを倒して、宝箱をゲットした！',
      image: '/images/cave.png',
      overlayImage: '/images/chest.png',
    },
    {
      text: 'しかし、宝箱には謎の魔法がかかっているようだ。問題を解いて宝箱を開けよう！',
      image: '/images/cave.png',
      overlayImage: '/images/chest.png',
    },
    {
      text: '和泉ラーニングスクエアのLS506教室へ行って、キーワードを手に入れよう！',
      image: '/images/cave.png',
      overlayImage: '/images/chest.png',
      participationStatus: true,
    }
  ];

  const handleParticipation = async (participated: boolean) => {
    setHasParticipated(participated);
    try {
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
    } catch (error) {
      console.error('参加情報の送信に失敗しました:', error);
    }
  };

  const handleNext = (url: string) => {
    // 動的に指定されたURLにページ遷移
    router.push(url);
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
        step={1}   // stepを指定
        onNext={() => handleNext('/quiz/courseA12')} // 正しいページ遷移を指定
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;
