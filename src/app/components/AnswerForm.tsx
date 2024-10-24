// src/app/components/AnswerForm.tsx
"use client";

import React from 'react';

interface AnswerFormProps {
  keywordInput: string;
  onSubmit: () => void;
  setKeywordInput: (input: string) => void; // ここが正しいか確認
  course: string; // 追加: コース名を受け取る
  step: number;   // 追加: ステップを受け取る
}

const AnswerForm: React.FC<AnswerFormProps> = ({ keywordInput, setKeywordInput, onSubmit, course, step }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // キーワードが正しい場合の処理
    if (keywordInput.trim()) {
      // Supabaseにキーワードを記録
      await fetch('/api/keywords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keywordInput.trim(),
          course,
          step,
        }),
      });
      onSubmit(); // 親コンポーネントのonSubmitを呼び出す
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keywordInput}
        onChange={(e) => setKeywordInput(e.target.value)}
        placeholder="キーワードを入力"
        style={{ color: 'black', textAlign: 'center' }}
        required
      />
      <button type="submit">送信</button>
    </form>
  );
};

export default AnswerForm;
