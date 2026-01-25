import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SUNBEAM from '../assets/SUNBEAM.jpg';
import AZURE from '../assets/Azure.png';
import EXCEL from '../assets/excel.png';
const coursesData = [
  {
    title: 'Azure AI Engineer Associate',
    provider: 'Microsoft',
    certLink: 'https://learn.microsoft.com/api/credentials/share/en-us/DeepankarPawar-8884/D040B1619931FD41?sharingId',
    image: AZURE,
  },
  {
    title: 'Aptitude and reasoning',
    provider: 'Sunbeam Institute of Engineering and Technology',
    // certLink: '#',
    image: SUNBEAM,
  },
  // {
  //   title: 'Deep Learning Specialization',
  //   provider: 'Coursera (DeepLearning.AI)',
  //   certLink: '#',
  //   image: '/src/assets/Azure.png',
  // },
  // {
  //   title: 'LangChain for LLM Application Development',
  //   provider: 'DeepLearning.AI',
  //   certLink: '#',
  //   image: '/src/assets/langchain_cert.png',
  // },
  // {
  //   title: 'AWS Cloud Practitioner',
  //   provider: 'Amazon Web Services',
  //   certLink: '#',
  //   image: '/src/assets/aws_cert.png',
  // },
  {
    title: 'Excel Mastery',
    provider: 'Udemy',
    certLink: 'https://www.udemy.com/certificate/UC-52431e5c-b23d-40f2-a497-850a24abafc8/',
    image: EXCEL,
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 px-6 bg-slate-50/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          My Courses & Certifications
        </h2>
        <p className="text-slate-500 italic mb-10 text-sm">
          Continuous learning is the key to growth.
        </p>

        <div className="space-y-5">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                {/* Certificate Image */}
                <div className="h-44 md:h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="flex flex-col items-center justify-center h-full text-slate-600">
                          <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                          </svg>
                          <span class="text-sm font-medium">Certificate</span>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1.5">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    {course.provider}
                  </p>
                  <a
                    href={course.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors w-fit"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CoursesSection;
