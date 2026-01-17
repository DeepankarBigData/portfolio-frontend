import { motion } from 'framer-motion';

// ✅ Import logos
import pythonLogo from "../assets/python.png";
import pytorchLogo from "../assets/pytorch.png";
import langchainLogo from "../assets/langchain.png";
import llamaindexLogo from "../assets/llamaindex.png";
import awsLogo from "../assets/aws.png";
import gcpLogo from "../assets/gcp.png";
import dockerLogo from "../assets/Docker-Logo.png";
import kafkaLogo from "../assets/kafka.png";
import airflowLogo from "../assets/airflow.png";

const techPills = [
  'Python', 'PyTorch', 'LangChain', 'LlamaIndex', 'LangGraph', 'MLflow',
  'AWS (EC2 · Lambda · S3 · Bedrock)', 'GCP', 'Kubernetes', 'Docker',
  'Kafka', 'Airflow', 'SQL & NoSQL', 'ChromaDB · Pinecone · pgvector',
  'n8n · REST APIs', 'Prometheus · Loki · Grafana'
];

const techLogos = [
  { name: "Python", src: pythonLogo },
  { name: "PyTorch", src: pytorchLogo },
  { name: "LangChain", src: langchainLogo },
  { name: "LlamaIndex", src: llamaindexLogo },
  { name: "AWS", src: awsLogo },
  { name: "GCP", src: gcpLogo },
  { name: "Docker", src: dockerLogo },
  { name: "Kubernetes", src: kubernetesLogo },
  { name: "Kafka", src: kafkaLogo },
  { name: "Airflow", src: airflowLogo },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="py-24 px-6 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-sm uppercase tracking-widest text-slate-400 font-medium text-center mb-8">
          Tech Stack
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techPills.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Scrolling tech icons */}
        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          
          <motion.div 
            className="flex gap-8"
            animate={{ x: [0, -800] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Logo placeholders with emoji icons */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-lg bg-white shadow-sm flex items-center justify-center text-2xl flex-shrink-0"
              >
               {[...Array(20)].map((_, i) => {
  const logo = techLogos[i % techLogos.length];

  return (
    <div
      key={i}
      className="w-16 h-16 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0"
      title={logo.name}
    >
      <img
        src={logo.src}
        alt={logo.name}
        className="w-10 h-10 object-contain"
      />
    </div>
  );
})}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
