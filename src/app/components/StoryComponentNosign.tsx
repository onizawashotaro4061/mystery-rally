// src/app/components/StoryComponent.tsx
"use client";

import React, { useState } from 'react';
import OverlayImageComponent from '@/app/components/OverlayImageComponent';
import AnswerForm from '@/app/components/AnswerForm';

interface Story {
  text: string;
  image: string;
  overlayImage?: string;
  participationStatus?: boolean;
  answerFormProps?: boolean;
}

interface StoryComponentProps {
  stories: Story[];
  onParticipationChange: (participated: boolean) => void;
  onParticipationConfirmed: () => void;
  correctKeyword: string;
  correctHint: string;
  course: string; // courseを追加
  step: number;   // stepを追加
  onNext: () => void;
  onHint: () => void;
}

const StoryComponent: React.FC<StoryComponentProps> = ({
  stories,
  correctKeyword,
  correctHint,
  course,
  step,
  onNext,
  onHint,
}) => {
  const [currentStoryIndex,] = useState(0);
  const [keywordInput, setKeywordInput] = useState('');

  const handleKeywordSubmit = () => {
    if (keywordInput === correctKeyword) {
      onNext(); // 正しいキーワードの遷移先
    } else if (keywordInput === correctHint) {
      onHint(); // ヒントの遷移先
    } else {
      alert('正しいキーワードを入力してください。');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <OverlayImageComponent
        baseImage={stories[currentStoryIndex].image}
        overlayImage={stories[currentStoryIndex].overlayImage}
        altText={`ストーリーの画像 ${currentStoryIndex + 1}`}
        overlayImageStyle={{ width: '100px', top: '20px', left: '20px' }}
        style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
      />

      <div
        style={{
          border: '2px solid #4a90e2',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          color: 'black',
          marginBottom: '10px',
        }}
      >
        <p style={{ fontSize: '18px' }}>
          {stories[currentStoryIndex].text.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      {/* AnswerFormの表示制御 */}
      {stories[currentStoryIndex].answerFormProps && (
        <AnswerForm
          keywordInput={keywordInput}
          setKeywordInput={setKeywordInput}
          onSubmit={handleKeywordSubmit}
          course={course} // courseを渡す
          step={step}     // stepを渡す
        />
      )}
    </div>
  );
};

export default StoryComponent;
