import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, X, Send, Users, BookOpen, Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConnectSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        form.reset();
        setIsModalOpen(false);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via LinkedIn.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you're a <span className="text-blue-400 font-medium">recruiter</span>, a fellow <span className="text-purple-400 font-medium">engineer</span>, or someone eager to <span className="text-emerald-400 font-medium">learn</span> — I believe we can learn from each other. Feel free to <span className="text-amber-400 font-medium">hire me</span> or reach out for collaboration!
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-14">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
            >
              <Mail size={20} />
              Say Hi! OR Hire me
            </motion.button>
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
          className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl relative text-slate-900 max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            <X size={24} />
          </button>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">Let's Collaborate!</h2>
            <p className="text-slate-500">
              Whether you want to <span className="font-medium text-blue-600">hire me</span>, explore <span className="font-medium text-purple-600">1:1 live learning sessions</span>, or simply exchange ideas — I'm excited to connect!
            </p>
          </div>

          {/* Quick options */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl">
              <Briefcase size={20} className="text-blue-600 mb-1" />
              <span className="text-xs text-blue-700 font-medium">Hire Me</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-purple-50 rounded-xl">
              <BookOpen size={20} className="text-purple-600 mb-1" />
              <span className="text-xs text-purple-700 font-medium">1:1 Sessions</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl">
              <Users size={20} className="text-emerald-600 mb-1" />
              <span className="text-xs text-emerald-700 font-medium">Collaborate</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">I'm interested in...</label>
              <div className="flex flex-wrap gap-3">
                {['Hiring', '1:1 Learning', 'Collaboration', 'Just Saying Hi'].map(purpose => (
                  <label key={purpose} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="purpose" value={purpose} className="accent-blue-600" required />
                    <span className="text-sm text-slate-600">{purpose}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project, learning goals, or just say hello..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default ConnectSection;
