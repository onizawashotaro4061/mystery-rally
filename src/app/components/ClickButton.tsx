"use client";

interface ClickButtonProps {
  onClick: () => void;
  count: number;
  label: string; // フロントエンドでの表示用
  color: string;
}

const ClickButton: React.FC<ClickButtonProps> = ({ onClick, label, color }) => {
  const handleClick = async () => {
    const course = label === "魔術師" ? "A" : "B"; // labelからcourseに変換

    const res = await fetch('/api/click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ course }), // labelではなくcourseを送信
    });
    const data = await res.json();
    
    if (res.ok) {
      onClick(); // クリック数を更新する関数を呼び出す
    } else {
      console.error('Error:', data.error);
    }
  };

  return (
    <div>
      <button  onClick={handleClick} 
        style={{ backgroundColor: color, color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {label}</button>
    </div>
  );
};

export default ClickButton;
