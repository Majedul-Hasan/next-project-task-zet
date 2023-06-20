import Image from 'next/image';
import React from 'react';

const EvolutionsSection = () => {
  return (
    <section className=' mt-20 max-w-[95rem] mx-auto '>
      <h2 className='text-center text-2xl font-bold lg:text-4xl'>
        How we evolved over the years
      </h2>
      <div className='overflow-y-auto pt-10 lg:pt-20 lg:pb-2 '>
        <Image
          className=' '
          src='/assets/Evolutions.png'
          width={2000}
          height={300}
          alt='evolution  image'
        />
      </div>
    </section>
  );
};

export default EvolutionsSection;
