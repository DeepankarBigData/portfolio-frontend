import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quotes = [
  {
    text: "Humility is not thinking less of yourself, but thinking of yourself less.",
    author: "C.S. Lewis"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  }
];

const QuoteSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="quotes" className="py-20 px-6 bg-slate-50 min-h-[50vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={prevQuote}
            className="p-2 text-slate-400 hover:text-slate-800 transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-slate-800 text-center italic max-w-3xl mx-auto leading-relaxed">
                "{quotes[currentIndex].text}"
              </p>
              <p className="text-slate-500 text-center mt-4 font-medium">
                — {quotes[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextQuote}
            className="p-2 text-slate-400 hover:text-slate-800 transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
