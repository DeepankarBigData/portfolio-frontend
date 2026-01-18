import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import FocusSection from '@/components/FocusSection';
import EducationSection from '@/components/EducationSection';
import CoursesSection from '@/components/CoursesSection';
import TechStackSection from '@/components/TechStackSection';
import ConnectSection from '@/components/ConnectSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <FocusSection />
      <EducationSection />
      <CoursesSection />
      <TechStackSection />
      <ConnectSection />
    </div>
  );
};

export default Index;