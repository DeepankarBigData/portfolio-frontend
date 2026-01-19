import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import TechStackSection from '@/components/TechStackSection';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header with back navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <h1 className="text-xl font-semibold text-white">Skills & Technologies</h1>
          
          <div className="w-24" /> {/* Spacer for alignment */}
        </div>
      </motion.header>

      {/* Main content */}
      <main className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center px-6 py-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Tech Stack
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* TechStack Section - unchanged */}
        <TechStackSection />
      </main>
    </div>
  );
};

export default Skills;

