// components/ClearScreen.tsx
import React from 'react';

type ClearScreenProps = {
    totalQuestions: number;
    onHome: () => void; // ホームに戻る関数を追加
};

const ClearScreen: React.FC<ClearScreenProps> = ({ totalQuestions, onHome }) => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>クイズクリア！</h1>
            <button onClick={onHome}>ホームに戻る</button> {/* ホームに戻るボタン */}
        </div>
    );
};

export default ClearScreen;
