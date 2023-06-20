import Effects from '@/components/Effects';
import HeroSection from '@/components/Hero';
import Products from '@/components/Products';
import StartEarning from '@/components/StartEarning';
import TopBrands from '@/components/TopBrands';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopBrands />
      <Products />
      <Effects />
      <WhyChooseUs />
      <StartEarning />
    </>
  );
}
