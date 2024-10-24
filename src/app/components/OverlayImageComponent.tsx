// src/app/components/OverlayImageComponent.tsx
import React from 'react';
import Image from 'next/image';

interface OverlayImageComponentProps {
  baseImage: string;
  overlayImage?: string;
  altText: string;
  overlayImageStyle?: React.CSSProperties; // オーバーレイ画像のスタイル
  style?: React.CSSProperties; // ベース画像のスタイル
}

const OverlayImageComponent: React.FC<OverlayImageComponentProps> = ({
  baseImage,
  overlayImage,
  altText,
  overlayImageStyle,
  style,
}) => {
  return (
    <div style={{ position: 'relative', ...style }}>
      <Image
        src={baseImage}
        alt={altText}
        width={300}
       height={300}
        style={{ width: '100%', height: 'auto', 
          // borderRadius: '8px' 
        }}
      />
      {overlayImage && (
        <Image
          src={overlayImage}
          width={30}
       height={30}
          alt="オーバーレイ画像"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(100%, 50%)', // 画像を中央に配置
            ...overlayImageStyle,
          }}
        />
      )}
    </div>
  );
};

export default OverlayImageComponent;
