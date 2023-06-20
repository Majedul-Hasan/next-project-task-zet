'use client';

import Image from 'next/image';
import { useRef } from 'react';

const InvestorCard = ({ ImgSrc, name, tag }) => {
  const cardRef = useRef(null);
  let bounds;

  const rotateToMouse = (e) => {
    if (cardRef.current) bounds = cardRef.current.getBoundingClientRect();
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
  };

  const removeListener = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };
  return (
    <div
      style={{ perspective: 600 }}
      className=''>
      <div
        ref={cardRef}
        onMouseMove={rotateToMouse}
        onMouseLeave={removeListener}
        className='transition-all duration-75'>
        <Image
          src={ImgSrc}
          alt='investor image'
          height={200}
          width={200}
        />
        {name && <h3 className='mt-6 font-medium'>{name}</h3>}
        {tag && <p className='text-slate-600'>{tag}</p>}
      </div>
    </div>
  );
};

export default InvestorCard;
