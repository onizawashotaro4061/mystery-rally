// src/app/components/StoryComponent.tsx
"use client";

import React, { useState } from 'react';
import OverlayImageComponent from '@/app/components/OverlayImageComponent';
import AnswerForm from '@/app/components/AnswerForm';
import ParticipationStatus from '@/app/components/ParticipationStatus';

interface Story {
  text: string;
  image: string;
  overlayImage?: string;
  answerFormProps?: boolean;
  participationStatus?: boolean; // 参加状況のプロパティを追加
}

interface StoryComponentProps {
  stories: Story[];
  onParticipationChange: (participated: boolean) => void;
  onParticipationConfirmed: () => void;
  correctKeyword: string;
  course: string;
  step: number;
  onNext: (url: string) => void;
  participationLabel: string;
}

const StoryComponent: React.FC<StoryComponentProps> = ({
  stories,
  onParticipationChange,
  onParticipationConfirmed,
  correctKeyword,
  course,
  step,
  onNext,
  participationLabel,
}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleKeywordSubmit = () => {
    // キーワードのチェックをここで実装
  };

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const handlePreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
     <div style={{ textAlign: 'center', 
     background: 'linear-gradient(to bottom, #87CEFA, #DDA0DD 40%, #DDA0DD 60%, #87CEFA)',
     padding: '20px', height: '100vh'}}>
      <OverlayImageComponent
        baseImage={stories[currentStoryIndex].image}
        overlayImage={stories[currentStoryIndex].overlayImage}
        altText={`ストーリーの画像 ${currentStoryIndex + 1}`}
        overlayImageStyle={{ width: '100px', top: '20px', left: '20px' }}
        style={{ 
          width: '100%',
          height: 'auto',
          // borderRadius: '8px',
          marginBottom: '10px' }}
      />

      <div
        style={{
          border: '2px solid #4a90e2',
          // borderRadius: '8px',
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

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          {currentStoryIndex > 0 && (
            <button
              onClick={handlePreviousStory}
              style={{
                cursor: 'pointer',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
              }}
            >
              戻る
            </button>
          )}

          {currentStoryIndex < stories.length - 1 && (
            <button
              onClick={handleNextStory}
              style={{
                cursor: 'pointer',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                marginLeft: currentStoryIndex > 0 ? 'auto' : '0',
              }}
            >
              次へ
            </button>
          )}
        </div>
      </div>

      {/* participationStatusがtrueのときのみ参加状況の表示 */}
      {stories[currentStoryIndex].participationStatus && (
        <ParticipationStatus
          onParticipationChange={onParticipationChange}
          onParticipationConfirmed={onParticipationConfirmed}
          correctKeyword={correctKeyword}
          onNext={onNext}
          participationLabel={participationLabel}
        />
      )}

      {/* AnswerFormの表示制御 */}
      {stories[currentStoryIndex].answerFormProps && (
        <AnswerForm
          keywordInput={''}
          setKeywordInput={() => {}}
          onSubmit={handleKeywordSubmit}
          course={course}
          step={step}
        />
      )}
    </div>
  );
};

export default StoryComponent;
