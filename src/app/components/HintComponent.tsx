// src/app/components/HintComponent.tsx
import React from 'react';
import OverlayImageComponent from '@/app/components/OverlayImageComponent';
import AnswerForm from '@/app/components/AnswerForm';

interface HintComponentProps {
  keywordInput: string;
  setKeywordInput: (input: string) => void;
  onSubmit: () => void;
  course: string; // courseを追加
  step: number;   // stepを追加
}

const HintComponent: React.FC<HintComponentProps> = ({ keywordInput, setKeywordInput, onSubmit, course, step }) => {
  return (
    <div>
      <OverlayImageComponent
        baseImage="/images/cave.png"
        overlayImage=""
        altText="ヒント画像"
        overlayImageStyle={{ width: '100px', top: '20px', left: '20px' }}
        style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
      />
      <p>ヒント画面です。ここにはヒントの画像と説明が表示されます。</p>
      <AnswerForm
        keywordInput={keywordInput}
        setKeywordInput={setKeywordInput}
        onSubmit={onSubmit}
        course={course} // courseを渡す
        step={step}     // stepを渡す
      />
    </div>
  );
};

export default HintComponent;
