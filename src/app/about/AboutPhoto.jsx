import Image from 'next/image';
import React from 'react';

const AboutPhoto = () => {
  return (
    <section className='-mb-20 border-b-4'>
      <Image
        src='/assets/AboutUsFooter.png'
        alt='footer hero section image'
        width={2000}
        height={900}
      />
    </section>
  );
};

export default AboutPhoto;
