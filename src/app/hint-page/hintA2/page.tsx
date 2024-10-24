// src/app/hint-page/page.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnswerForm from '@/app/components/AnswerForm';
import Image from 'next/image';

const HintPage: React.FC = () => {
  const [keywordInput, setKeywordInput] = useState('');
  const router = useRouter();
  const correctKeyword = 'mage'; // 正しいキーワードを指定

  const handleKeywordSubmit = () => {
    if (keywordInput === correctKeyword) {
      router.push('/quiz/courseA17'); // 正しいキーワードの場合の遷移先
    } else {
      alert('正しいキーワードを入力してください。');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Image src="/images/A2h.jpg"
      width={300}
       height={300}
      alt="ヒント画像" style={{ width: '100%', borderRadius: '8px' }} />
      {/* 他のコンテンツや情報もここに追加できます */}
      <p style={{marginTop: '20px'}}>答えを入力してください。</p>
      
      {/* AnswerForm コンポーネントを使用 */}
      <AnswerForm
        keywordInput={keywordInput}
        setKeywordInput={setKeywordInput}
        onSubmit={handleKeywordSubmit}
        course="A"  // ここでコース名を設定
        step={11}    // ここでステップを設定
/>

    </div>
  );
};

export default HintPage;
