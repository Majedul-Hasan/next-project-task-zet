'use client';
import Image from 'next/image';
import React from 'react';
import { MouseEvent, useRef } from 'react';

const ProductCard = ({ src, title, content, bg }) => {
  const cardRef = useRef(null);

  const rotateToMouse = (e) => {
    if (cardRef.current) {
      const bounds = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      if (cardRef.current) {
        cardRef.current.style.transform = `
        scale(1.04)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance)}deg
        )
      `;
      }
    }
  };

  const removeListener = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <div style={{ perspective: 1000, transition: 'scale 3s ease' }}>
      <div
        ref={cardRef}
        onMouseMove={rotateToMouse}
        onMouseLeave={removeListener}
        style={{ backgroundColor: bg }}
        className='group flex h-full flex-col items-center gap-8 rounded-xl p-10 transition-all duration-75 hover:bg-white hover:shadow-lg xl:h-52 xl:flex-row'>
        <div className='mr-auto'>
          <Image
            className='h-20 w-auto saturate-0 group-hover:saturate-100 xl:h-auto'
            src={src}
            alt='product card image'
            height={200}
            width={200}
          />
        </div>
        <div>
          <h4 className='text-xl font-bold'>{title}</h4>
          <p className='mt-1'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
