// src/app/components/ParticipationStatus.tsx
import React, { useState } from 'react';
import ClickButton from './ClickButton';

interface ParticipationStatusProps {
  onParticipationChange: (participated: boolean) => void;
  onParticipationConfirmed: () => void; // 参加確認のためのコールバック
  correctKeyword: string;
  onNext: (url: string) => void; // ページ遷移のためのコールバック
  participationLabel: string; // 参加する企画の名称
}

const ParticipationStatus: React.FC<ParticipationStatusProps> = ({
  onParticipationChange,
  onParticipationConfirmed,
  correctKeyword,
  onNext,
  participationLabel, // 追加: 参加する企画の名称
}) => {
  const [hasParticipated, setHasParticipated] = useState<boolean | null>(null);
  const [keyword, setKeyword] = useState('');
  const [showWarning, setShowWarning] = useState('');

  const handleParticipation = async (participated: boolean) => {
    setHasParticipated(participated);
    onParticipationChange(participated); // 親コンポーネントに参加状況を通知

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

    if (participated) {
      onParticipationConfirmed(); // 参加確認コールバックを呼び出す
    }
  };

  const checkKeyword = async () => {
    if (keyword === correctKeyword) {
      setShowWarning('');
      onNext(''); // 正しいキーワードの場合にページ遷移
      await fetch('/api/keyword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          course: 'A',
          step: 1,
        }),
      });
    } else {
      setShowWarning('キーワードが間違っています。もう一度入力してください。');
    }
  };

  return (
    <div>
      {hasParticipated === null ? (
        <div>
           <p>{`${participationLabel}に参加しましたか？`}</p> {/* ここを修正 */}
          <ClickButton
            label="参加した"
            onClick={() => handleParticipation(true)}
            count={0}
            color='red'
          />
          <ClickButton
            label="参加していない"
            onClick={() => handleParticipation(false)}
            count={0}
            color='blue'
          />
        </div>
      ) : (
        <div>
          <p>キーワードを入力してください。</p>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ color: 'black', textAlign: 'center' }}
          />
          <button onClick={checkKeyword}>送信</button>
          {showWarning && <p style={{ color: 'red' }}>{showWarning}</p>}
        </div>
      )}
    </div>
  );
};

export default ParticipationStatus;
