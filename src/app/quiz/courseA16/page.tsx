// src/app/courseA12/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import StoryComponentNosign from '@/app/components/StoryComponentNosign';

const Page: React.FC = () => {
  const router = useRouter();
  const correctKeyword = 'mage';
  const correctHint = '留学生';

  // ストーリーのデータ
  const stories = [
    {
      text: '問題が現れた！ヒントが欲しい人は第一校舎の306教室へ行って、キーワードを手に入れよう！\n\n',
      image: '/images/cave.png',
      answerFormProps: true,
    }
  ];

  // ページ遷移処理
  const handleNext = (url: string) => {
    router.push(url);
  };

  const handleHint = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      <StoryComponentNosign
        stories={stories}
        onParticipationChange={() => {}}
        onParticipationConfirmed={() => {}}
        correctKeyword={correctKeyword}
        correctHint={correctHint}
        course="A" // courseを指定
        step={2}   // stepを指定
        onNext={() => handleNext('/quiz/courseA17')} // 正解時の遷移先を指定
        onHint={() => handleHint('/hint-page/hintA2')} // ヒント時の遷移先を指定
      />
    </div>
  );
};

export default Page;
