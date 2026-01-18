import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'MBA in Finance',
    institution: 'Great Lakes Institute of Management',
    location: 'Chennai, India',
    period: '2025 – Present',
    description: 'Pursuing advanced studies in finance with focus on fintech and investment strategies.',
    current: true
  },
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Symbiosis Skills & Professional University',
    location: 'Pune, India',
    period: '2021 – 2024',
    description: 'Graduated with strong foundation in software engineering, AI/ML, and data structures.',
    current: false
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-sm uppercase tracking-widest text-slate-400 font-medium text-center mb-4">
          Education
        </p>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Academic Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-2">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    edu.current 
                      ? 'bg-blue-500 border-blue-200' 
                      : 'bg-slate-400 border-slate-200'
                  }`} />
                </div>

                {/* Card */}
                <div className={`flex-1 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  edu.current 
                    ? 'bg-blue-50 border-blue-200' 
                    : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className={`w-5 h-5 ${edu.current ? 'text-blue-600' : 'text-slate-600'}`} />
                        <h3 className="text-xl font-semibold text-slate-900">{edu.degree}</h3>
                        {edu.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-blue-500 text-white rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-slate-700 font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-slate-600 leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;