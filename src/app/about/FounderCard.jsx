import Image from 'next/image';
import { useRef } from 'react';

const FounderCard = ({ src, name, categ }) => {
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
      style={{ perspective: 1000 }}
      className=''>
      <div
        ref={cardRef}
        onMouseMove={rotateToMouse}
        onMouseLeave={removeListener}
        className='transition-all duration-75'>
        <Image
          src={src}
          alt='Founder image'
          height={300}
          width={300}
        />
        <div className='flex items-center justify-between'>
          <div className='text-base'>
            <h3 className='mt-6 font-medium'>{name}</h3>
            <p className='text-slate-600 text-sm'>{categ}</p>
          </div>
          <Image
            className='mt-4'
            src='/assets/LinkedIn.png'
            alt='linkedin icon'
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
