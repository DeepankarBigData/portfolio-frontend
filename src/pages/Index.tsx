import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import FocusSection from '@/components/FocusSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import ConnectSection from '@/components/ConnectSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <FocusSection />
      <AboutSection />
      <TechStackSection />
      <ConnectSection />
    </div>
  );
};

export default Index;
