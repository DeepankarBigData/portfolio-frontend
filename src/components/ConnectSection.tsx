import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, X } from 'lucide-react';

const ConnectSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="connect" className="py-24 px-6 bg-slate-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let's Connect</h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto">
            Whether you're a recruiter, fellow engineer, or just curious — I'd love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors"
            >
              <Mail size={18} />
              Say Hi!
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
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
