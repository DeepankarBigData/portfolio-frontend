import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Bachelor of Engineering in Mechanical Engineering',
    institution: 'Dr DY Patil School of engineering, Pune | SPPU',
    period: '2016-2020',
    status: '',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop'
  },
  {
    degree: 'HSC Science',
    institution: 'Progressive Education Society, Nashik',
    period: '2014-2016',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-blue-50/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          My Education
        </h2>
        <p className="text-slate-600 italic text-center mb-12">
          Education is not the learning of facts, but the training of the mind to think.
        </p>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="h-48 md:h-full">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-600 mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-lg font-semibold">
                    <span className="text-green-600">{edu.period}</span>
                    {edu.status && (
                      <span className="text-green-600"> | {edu.status}</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
