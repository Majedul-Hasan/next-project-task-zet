import Image from 'next/image';
import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className='relative flex justify-center items-center h-[800px] overflow-hidden'>
      <Image
        className='object-cover lg:h-auto absolute top-0 -z-10 '
        src='/assets/OurMission.png'
        alt='our mission header image'
        width={2000}
        height={1200}
      />
      <div className='   max-w-[55ch]  text-center  text-white'>
        <h2 className='text-3xl font-bold uppercase py-3'>Our Mission</h2>
        <p className='text-center text-sm'>
          Enabling financial inclusion for the next billion Indians & making
          their Zindagi Set. Building a platform that enables you to sell
          financial products & earn up to Rs. 1 lakh every month.
        </p>
        <span className='text-base font-bold tracking-widest my-3 py-3'>
          EARN BETTER. LIVE BETTER.
        </span>
      </div>
    </section>
  );
};

export default AboutHeroSection;
