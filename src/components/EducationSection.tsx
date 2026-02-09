import { motion } from 'framer-motion';
import cdacImage from '../assets/cdac.jpg';
import college1Image from '../assets/college1.jpg';
import hscImage from '../assets/HSC.jpg';
import sscImage from '../assets/SSC.jpg';

const educationData = [
  {
    degree: 'C-DAC, PG Diploma in Data Science',
    institution: 'C-DAC, Hyderabad',
    period: '2022-2023  |  Grade: A',
    image: cdacImage,
  },
  {
    degree: 'Bachelor of Engineering in Mechanical Engineering',
    institution: 'Dr DY Patil School of engineering, Pune | SPPU',
    period: '2016-2020  |  CGPA: 7.83',
    image: college1Image,
  },
  {
    degree: 'HSC Science',
    institution: 'Progressive Education Society, Nashik',
    period: '2014-2016  |  Grade: B',
    image: hscImage,
  },
  {
    degree: 'SSC',
    institution: 'Holy Flower English High School, Nashik',
    period: '2002-2014  |  Percentage: 75%',
    image: sscImage,
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 bg-slate-50/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          My Education
        </h2>
        <p className="text-slate-500 italic mb-10 text-sm">
          Education is not the learning of facts, but the training of the mind to think.
        </p>

        <div className="space-y-5">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                {/* Image */}
                <div className="h-44 md:h-48">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1.5">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-600 mb-2 text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    {edu.period}
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
