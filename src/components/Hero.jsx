'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='max-w-[85rem] pt-10 lg:pt-24  mx-auto'>
      <motion.div
        initial={{ y: 140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='relative flex h-min justify-between rounded bg-[#e9f4ff] p-6 md:p-16'>
        <div className='flex flex-col gap-6 text-center lg:text-start'>
          <h3 className='flex max-w-[26ch] flex-col gap-4 text-4xl font-bold'>
            Become a Financial Advisor and{' '}
            <span className='text-blue-600'>Earn Rs.1 Lakh/Month</span>
          </h3>
          <p className='text-lg'>No investment required</p>
          <div className='lg: flex justify-center lg:justify-start'>
            <Image
              src='assets/googleplay.svg'
              alt=''
              height={40}
              width={120}
            />
          </div>
        </div>
        <div className='hidden w-96  lg:block'>
          <Image
            className='absolute bottom-0 -top-12'
            src='/assets/HeroImgNew.png'
            alt='hero image'
            height={500}
            width={450}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
