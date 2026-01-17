import { motion } from 'framer-motion';

const AboutSection = () => {
  const snapshots = [
    {
      title: 'Work',
      content: 'Junior AI/ML Engineer · Viyona Fintech Pvt. Ltd. (2025-Present). Tackling fraud, payment flows, and intelligent automation for finance partners.'
    },
    {
      title: 'Education',
      content: 'MBA (Finance) · Great Lakes Institute of Management (2025–Present). B.Tech · Symbiosis Skills & Professional University (2021–2024)'
    },
    {
      title: 'Leadership',
      content: 'Member of the Coding Club and Tech Fest volunteer; I enjoy hosting knowledge sessions and mentoring peers who are new to ML.'
    },
    {
      title: 'Strengths',
      content: 'Python · Machine Learning · Generative AI · Product storytelling · Systems thinking · Fitness discipline.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          I build intelligent systems for fintech teams and keep a learner's mindset. By day I'm a
          full-time AI/ML Engineer at Viyona Fintech in Hyderabad; by night I'm a student pursuing
          my MBA in Finance at Great Lakes Institute of Management, Chennai.
          <br /><br />
          My work sits at the intersection of risk, automation, and human trust.
        </p>

        <p className="text-sm uppercase tracking-widest text-slate-400 font-medium mb-6">
          Snapshot
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {snapshots.map((snapshot, index) => (
            <motion.div
              key={snapshot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50"
            >
              <h5 className="text-sm uppercase tracking-widest text-slate-400 font-medium mb-3">
                {snapshot.title}
              </h5>
              <p className="text-slate-700 leading-relaxed">{snapshot.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
