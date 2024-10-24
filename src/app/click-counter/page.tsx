// src/app/click-counter/page.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ClickButton from '../components/ClickButton';
import Image from 'next/image';

const ClickCounterPage: React.FC = () => {
  const [clickCounts, setClickCounts] = useState<number[]>([0, 0]); // AコースとBコースのカウント
  const router = useRouter();

  const handleClickA = async () => {
    const newCounts = [...clickCounts];
    newCounts[0] += 1;
    setClickCounts(newCounts);
    router.push('/quiz/courseA1');
  };

  const handleClickB = async () => {
    const newCounts = [...clickCounts];
    newCounts[1] += 1;
    setClickCounts(newCounts);
    router.push('/quiz/courseB1');
  };

  return (
   <div style={{ textAlign: 'center', backgroundColor: '#f0e6f6', padding: '20px', height: '100vh'}}>
      {/* ページ上部の画像 */}
       <Image src="/images/king.png" 
       width={300}
       height={300}
       alt="Example Image" style={{
          width: '100%',
          height: 'auto',
          marginBottom: '20px' }} />

      {/* ボタンの配置 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <ClickButton onClick={handleClickA} count={clickCounts[0]} label="魔術師" color="red" />
        <ClickButton onClick={handleClickB} count={clickCounts[1]} label="冒険家" color="blue" />
      </div>
    </div>
  );
};

export default ClickCounterPage;
