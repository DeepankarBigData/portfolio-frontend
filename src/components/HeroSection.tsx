import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={profileImage}
              alt="Deepankar"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl object-cover"
            />
          </motion.div>

          <p className="text-sm uppercase tracking-widest text-slate-400 font-medium mb-4">
            AI/ML Engineer • Finance Enthusiast
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Deepankar
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent systems at the intersection of AI, finance, and automation.
            Currently crafting ML solutions at Viyona Fintech while pursuing MBA in Finance.
          </p>

          {/* Ask My Agent Button */}
          <motion.a
            href="/chat.html"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            Ask My Agent About Me
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-sm text-slate-500"
          >
            Powered by RAG + FastAPI
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;