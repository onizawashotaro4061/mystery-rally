"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ClickLink() {
  const router = useRouter();

  const handleLinkClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // デフォルトのリンク遷移をキャンセル

    // APIにPOSTリクエストを送信して、クリック数を更新
    const res = await fetch('/api/click', {
      method: 'POST',
      body: JSON.stringify({ label: 'Go to Click Counter' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.error) {
      console.error('Failed to update click count');
    } else {
      console.log('Click count updated:', data.count);
    }

    // POSTリクエスト完了後、遷移を実行
    router.push('/select-detail');
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #87CEFA, #DDA0DD 40%, #DDA0DD 60%, #87CEFA)',  // 中央が薄紫、上下が水色
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      padding: '0 20px',
          }}>
      <Image 
      src="/images/logo_transparent.png"
      width={300}
      height={300}
       alt="Example Image"
       style={{
          width: '100%',
          maxWidth: '600px',
          marginBottom: '20px' }} />
      <a href="/click-counter" onClick={handleLinkClick} style={{ textDecoration: 'none' }}>
        <button style={{
          fontSize: '24px',
          padding: '15px 50px',
          backgroundColor: '#ff3333', // 明るい赤に変更
          color: '#ffcccc',           // テキストの明るい赤
          border: '2px solid #ff5555',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0px 4px 15px rgba(255, 85, 85, 0.75)', // 明るい赤の輝き
          fontFamily: '"Cinzel", serif',                    // 古風なフォント
          letterSpacing: '2px',
          transition: 'transform 0.2s, background-color 0.3s, box-shadow 0.3s',
          textShadow: '0 0 10px #ff9999',                  // 明るい赤の発光テキスト
          position: 'relative',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#ff6666';
          e.currentTarget.style.boxShadow = '0px 6px 20px rgba(255, 85, 85, 1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#ff3333';
          e.currentTarget.style.boxShadow = '0px 4px 15px rgba(255, 85, 85, 0.75)';
        }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          START
        </button>
      </a>
    </div>
  );
}
