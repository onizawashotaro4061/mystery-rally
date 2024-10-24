// pages/clear.tsx

"use client";

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ClearScreen from '../components/ClearScreen';

const ClearPage = () => {
    const router = useRouter();
    const [, setScore] = useState(0);
    const [totalQuestions, ] = useState(10); // 例として10問と仮定

    useEffect(() => {
        // スコアを取得するロジックをここに追加
        const fetchedScore = 8; // ここは実際のスコアを取得するコードに置き換える
        setScore(fetchedScore);
    }, []);


    const handleHome = () => {
        router.push('/click-counter'); // ホームに戻る
    };

    return (
        <ClearScreen
            totalQuestions={totalQuestions}
            onHome={handleHome} // ホームに戻る関数を渡す
        />
    );
};

export default ClearPage;
