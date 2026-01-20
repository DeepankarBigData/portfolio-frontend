import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (item: { id: string; label: string; path?: string }) => {
    if (item.path) {
      navigate(item.path);
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side - Personal Logo */}
        <div className="flex items-center">
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className={`text-2xl font-bold tracking-tight transition-colors duration-200 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            <span className="font-light">D</span>
            <span className="font-bold">P</span>
          </a>
        </div>

        {/* Right side - Navigation links */}
        <ul className="flex items-center gap-8">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'focus', label: 'Focus' },
            { id: 'education', label: 'Education' },
            { id: 'courses', label: 'Courses' },
            { id: 'skills', label: 'Skills' },
            { id: 'connect', label: 'Connect' }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled 
                    ? 'text-slate-600 hover:text-slate-900' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;