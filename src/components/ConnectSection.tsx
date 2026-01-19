import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, X } from 'lucide-react';

const ConnectSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="connect" className="relative py-24 px-6 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">
            Whether you're a recruiter, fellow engineer, or just curious — I'd love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-14">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
            >
              <Mail size={20} />
              Say Hi!
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="Deepankar_Resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-600 text-white rounded-full font-semibold text-lg hover:border-slate-400 hover:bg-white/5 transition-all duration-300"
            >
              <FileText size={20} />
              Resume
            </motion.a>
          </div>

          <div className="flex justify-center gap-8">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-slate-500 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-slate-500 hover:text-white transition-colors duration-300"
            >
              <Github size={28} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-slate-500 hover:text-white transition-colors duration-300"
            >
              <Mail size={28} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300 ${
          isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsModalOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: isModalOpen ? 1 : 0.9, opacity: isModalOpen ? 1 : 0 }}
          className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl relative text-slate-900"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-2xl font-semibold mb-4">Have any questions?</h2>
          <p className="text-slate-500 mb-6">Fill out the form and I'll get back soon!</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-700">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-700">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">You are a?</label>
              <div className="flex flex-wrap gap-3">
                {['Student', 'Recruiter', 'Company', 'Other'].map(role => (
                  <label key={role} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="role" value={role} className="accent-slate-800" />
                    <span className="text-sm text-slate-600">{role}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default ConnectSection;
