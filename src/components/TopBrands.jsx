'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useEffect } from 'react';

const imagesForSlider = [
  '/assets/Amex.png',
  '/assets/Aufin.png',
  '/assets/Axis.png',
  '/assets/Bajaj.png',
  '/assets/BOB.png',
  '/assets/Icici.png',
  '/assets/Idfc.png',
  '/assets/IndusInd.png',
  '/assets/YesBank.png',
  '/assets/StandardChartered.png',
];

const TopBrands = () => {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'ease',
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='lg:pt-10 mt-28'>
      <div className='mb-14 text-center text-lg'>
        <h3 className='text-xl font-bold'>Top Brands on ZET</h3>
        <p className='text-sm'> We are trusted by best brand in the country</p>
      </div>
      <div className='mx-auto max-w-[85rem]'>
        <Slider {...settings}>
          {imagesForSlider.map((src, index) => (
            <div
              key={index}
              className='px-4 lg:px-8'>
              <Image
                className='rounded-lg border px-2 py-3 lg:px-6 xl:px-8'
                src={src}
                height={80}
                width={200}
                alt={`Brand ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopBrands;
