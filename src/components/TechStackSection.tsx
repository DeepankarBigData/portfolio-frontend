import { motion } from 'framer-motion';

// Import all logos from src/assets
import pythonLogo from "../assets/python.png";
import pytorchLogo from "../assets/pytorch.jpg";
import langchainLogo from "../assets/LangChain_Logo.png";
import llamaindexLogo from "../assets/llama_index.png";
import langgraphLogo from "../assets/lang_graph.svg";
import mlflowLogo from "../assets/MLFLOW.png";
import awsS3Logo from "../assets/aws s3.png";
// import awsBedrockLogo from "../assets/aws bedrock.png";
// import awsLambdaLogo from "../assets/aws lambda.png";
// import awsEc2Logo from "../assets/aws ec2.png";
import dockerLogo from "../assets/Docker-Logo.png";
import kubeLogo from "../assets/kube.png";
// import kafkaLogo from "../assets/kafka.png";
// import airflowLogo from "../assets/airflow.png";
import sqlLogo from "../assets/sql.png";
import nosqlLogo from "../assets/no_sql.webp";
import chromadbLogo from "../assets/chromadb.png";
import pineconeLogo from "../assets/pinecone.jpg";
import pgvectorLogo from "../assets/pgvector.svg";
import n8nLogo from "../assets/n8n.png";
import restApiLogo from "../assets/rest_api.png";
// import prometheusLogo from "../assets/Prometheus.webp";
// import grafanaLogo from "../assets/Grafana_loki_logo.png";
// import gcpLogo from "../assets/gcp.png";
// import postmanLogo from "../assets/postman.png";

// Skill tags for top section
const skillCategories = [
  {
    label: 'Programming',
    skills: ['Python', 'OOPS', 'Data Structures', 'System Design', 'HLD', 'LLD', 'JavaScript (basics)']
  },
  {
    label: 'AI/ML/DL & Gen AI',
    skills: ['RAG systems', 'LlamaIndex', 'Langchain', 'Autogen', 'Context engineering', 'AI agents', 'Machine Learning', 'Deep Learning', 'scikit-learn', 'NumPy', 'pandas', 'OpenCV', 'AI tools']
  },
  {
    label: 'Cloud',
    skills: ['n8n', 'MCP', 'Azure ML', 'Azure Synapse', 'Cognitive Services', 'Azure AI services', 'Docker', 'Git', 'CI/CD']
  },
  {
    label: 'Databases & Data Engineering',
    skills: ['SQL', 'NoSQL', 'DBMS', 'Spark', 'Power BI']
  }
];

// Logos for scrolling section
const techLogosRow1 = [
  { name: "Python", src: pythonLogo },
  { name: "PyTorch", src: pytorchLogo },
  { name: "LangChain", src: langchainLogo },
  { name: "LlamaIndex", src: llamaindexLogo },
  { name: "LangGraph", src: langgraphLogo },
];

const techLogosRow2 = [
  { name: "n8n", src: n8nLogo },
  { name: "REST API", src: restApiLogo },
  // { name: "MLflow", src: mlflowLogo },
  // { name: "Postman", src: postmanLogo },
  // { name: "AWS EC2", src: awsEc2Logo },
];

const TechStackSection = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedRow1 = [...techLogosRow1, ...techLogosRow1, ...techLogosRow1];
  const duplicatedRow2 = [...techLogosRow2, ...techLogosRow2, ...techLogosRow2];

  return (
    <section id="skills" className="py-16 px-6 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Tech Stack</h2>

        {/* Skill Tags Section */}
        <div className="mb-12 space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-sm font-bold text-slate-800 mb-3">{category.label}:</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Logos Section */}
        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* First row - scrolling left */}
          <motion.div 
            className="flex gap-16 mb-10 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedRow1.map((logo, i) => (
              <div
                key={`row1-${logo.name}-${i}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto object-contain max-w-[120px]"
                />
                <span className="text-slate-600 font-medium whitespace-nowrap text-base">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling right */}
          <motion.div 
            className="flex gap-16 items-center"
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedRow2.map((logo, i) => (
              <div
                key={`row2-${logo.name}-${i}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto object-contain max-w-[120px]"
                />
                <span className="text-slate-600 font-medium whitespace-nowrap text-base">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
