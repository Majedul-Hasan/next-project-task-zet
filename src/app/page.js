import HeroSection from '@/components/Hero';
import Products from '@/components/Products';
import TopBrands from '@/components/TopBrands';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopBrands />
      <Products />
    </>
  );
}
