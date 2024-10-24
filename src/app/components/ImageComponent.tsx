// components/ImageComponent.tsx
import React from 'react';
import Image from 'next/image';

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  );
};

export default ImageComponent;
