import Effects from '@/components/Effects';
import HeroSection from '@/components/Hero';
import Products from '@/components/Products';
import TopBrands from '@/components/TopBrands';
import WhyChooseUs from '@/components/WhyChooseUs';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopBrands />
      <Products />
      <Effects />
      <WhyChooseUs />
    </>
  );
}
