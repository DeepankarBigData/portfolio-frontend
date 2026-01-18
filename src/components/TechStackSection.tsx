import { motion } from 'framer-motion';

// Import all logos from src/assets
import pythonLogo from "../assets/python.png";
import pytorchLogo from "../assets/pytorch.jpg";
import langchainLogo from "../assets/LangChain_Logo.png";
import llamaindexLogo from "../assets/llama_index.png";
import langgraphLogo from "../assets/lang_graph.svg";
import mlflowLogo from "../assets/MLFLOW.png";
import awsLogo from "../assets/aws s3.png";
import awsBedrockLogo from "../assets/aws bedrock.png";
import awsLambdaLogo from "../assets/aws lambda.png";
import awsEc2Logo from "../assets/aws ec2.png";
import gcpLogo from "../assets/gcp.png";
import dockerLogo from "../assets/Docker-Logo.png";
import kubeLogo from "../assets/kube.png";
import kafkaLogo from "../assets/kafka.png";
import airflowLogo from "../assets/airflow.png";
import sqlLogo from "../assets/sql.png";
import nosqlLogo from "../assets/no_sql.webp";
import chromadbLogo from "../assets/chromadb.png";
import pineconeLogo from "../assets/pinecone.jpg";
import pgvectorLogo from "../assets/pgvector.svg";
import n8nLogo from "../assets/n8n.png";
import restApiLogo from "../assets/rest_api.png";
import prometheusLogo from "../assets/Prometheus.webp";
import grafanaLogo from "../assets/Grafana_loki_logo.png";
import ollamaLogo from "../assets/ollama.png";
import gitLogo from "../assets/Git.png";
import postmanLogo from "../assets/postman.png";
import seleniumLogo from "../assets/selenium.png";

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
  { name: "LangGraph", src: langgraphLogo },
  { name: "MLflow", src: mlflowLogo },
  { name: "AWS S3", src: awsLogo },
  { name: "AWS Bedrock", src: awsBedrockLogo },
  { name: "AWS Lambda", src: awsLambdaLogo },
  { name: "AWS EC2", src: awsEc2Logo },
  { name: "GCP", src: gcpLogo },
  { name: "Docker", src: dockerLogo },
  { name: "Kubernetes", src: kubeLogo },
  { name: "Kafka", src: kafkaLogo },
  { name: "Airflow", src: airflowLogo },
  { name: "SQL", src: sqlLogo },
  { name: "NoSQL", src: nosqlLogo },
  { name: "ChromaDB", src: chromadbLogo },
  { name: "Pinecone", src: pineconeLogo },
  { name: "pgvector", src: pgvectorLogo },
  { name: "n8n", src: n8nLogo },
  { name: "REST API", src: restApiLogo },
  { name: "Prometheus", src: prometheusLogo },
  { name: "Grafana", src: grafanaLogo },
  { name: "Ollama", src: ollamaLogo },
  { name: "Git", src: gitLogo },
  { name: "Postman", src: postmanLogo },
  { name: "Selenium", src: seleniumLogo },
];

const TechStackSection = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...techLogos, ...techLogos];

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
            animate={{ x: [0, -1400] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedLogos.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="w-16 h-16 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;