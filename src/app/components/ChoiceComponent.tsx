// src/app/components/ChoiceComponent.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ChoiceComponentProps {
  imageUrl: string;  // 画面上部に表示する画像のURL
  correctAnswer: number; // 正解の番号をpage.tsxで指定
  course: string; // Supabaseに記録するためのコース名
  label: string;  // Supabaseに記録するためのラベル
  successUrl: string; // 正解した場合に遷移するURL
}

const ChoiceComponent: React.FC<ChoiceComponentProps> = ({
  imageUrl,
  correctAnswer,
  course,
  label,
  successUrl,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleAnswerClick = async (answer: number) => {
    setSelectedAnswer(answer);

    // 正解かどうかをチェック
    if (answer === correctAnswer) {
      setIsCorrect(true);

      // Supabaseに正解のクリック数を記録する処理
      await fetch('/api/record-correct-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          course: course,
          label: label,
          correctClick: true,
        }),
      });

      // 正解したら指定のURLに遷移
      router.push(successUrl);
    } else {
      setIsCorrect(false);
      setErrorMessage('不正解です。もう一度試してください。');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* 画面上部に画像を表示 */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src={imageUrl} alt="問題の画像" 
        width={300}
       height={300}
        style={{ maxHeight: '80%', maxWidth: '100%' }} />
      </div>

      {/* 画面下部に5つのボタンを表示 */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} style={{ textAlign: 'center' }}>
            <button
              onClick={() => handleAnswerClick(num)}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: selectedAnswer === num ? (isCorrect ? 'green' : 'red') : 'gray',
              }}
            >
              選択 {num}
            </button>
            {selectedAnswer === num && !isCorrect && errorMessage && (
              <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceComponent;
