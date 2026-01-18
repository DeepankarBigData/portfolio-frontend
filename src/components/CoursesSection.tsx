import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const coursesData = [
  {
    title: 'Machine Learning Specialization',
    provider: 'Coursera (Stanford/DeepLearning.AI)',
    certLink: '#',
    skills: ['Supervised Learning', 'Neural Networks', 'Decision Trees']
  },
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera (DeepLearning.AI)',
    certLink: '#',
    skills: ['CNNs', 'RNNs', 'Transformers', 'TensorFlow']
  },
  {
    title: 'LangChain for LLM Application Development',
    provider: 'DeepLearning.AI',
    certLink: '#',
    skills: ['LangChain', 'RAG', 'Prompt Engineering']
  },
  {
    title: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services',
    certLink: '#',
    skills: ['AWS EC2', 'S3', 'Lambda', 'Cloud Architecture']
  },
  {
    title: 'MLOps Fundamentals',
    provider: 'Google Cloud',
    certLink: '#',
    skills: ['MLflow', 'CI/CD', 'Model Deployment']
  },
  {
    title: 'Generative AI with Large Language Models',
    provider: 'Coursera (AWS)',
    certLink: '#',
    skills: ['LLMs', 'Fine-tuning', 'RLHF']
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 px-6 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Continuous Learning
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <a 
                  href={course.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                  title="View Certificate"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-blue-600 mb-4">{course.provider}</p>

              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CoursesSection;
