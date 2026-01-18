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
import dockerLogo from "../assets/Docker-Logo.png";
import kubeLogo from "../assets/kube.png";
import kafkaLogo from "../assets/kafka.png";
import airflowLogo from "../assets/airflow.png";
import sqlLogo from "../assets/sql.png";
import chromadbLogo from "../assets/chromadb.png";
import pineconeLogo from "../assets/pinecone.jpg";
import ollamaLogo from "../assets/ollama.png";
import seleniumLogo from "../assets/selenium.png";
import mcpLogo from "../assets/mcp.jpg";
import alpacaLogo from "../assets/aplaca.webp";

const techLogos = [
  { name: "AWS Lambda", src: awsLambdaLogo },
  { name: "Amazon S3", src: awsLogo },
  { name: "Amazon Bedrock", src: awsBedrockLogo },
  { name: "Docker", src: dockerLogo },
  { name: "Kubernetes", src: kubeLogo },
  { name: "Kafka", src: kafkaLogo },
  { name: "Airflow", src: airflowLogo },
  { name: "SQL", src: sqlLogo },
  { name: "PyTorch", src: pytorchLogo },
  { name: "Selenium", src: seleniumLogo },
  { name: "MCP", src: mcpLogo },
  { name: "Ollama", src: ollamaLogo },
  { name: "Alpaca", src: alpacaLogo },
  { name: "Python", src: pythonLogo },
  { name: "LangChain", src: langchainLogo },
  { name: "LlamaIndex", src: llamaindexLogo },
  { name: "LangGraph", src: langgraphLogo },
  { name: "MLflow", src: mlflowLogo },
  { name: "ChromaDB", src: chromadbLogo },
  { name: "Pinecone", src: pineconeLogo },
];

const TechStackSection = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <section id="techstack" className="py-16 px-6 bg-slate-50/50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Scrolling tech logos with labels - similar to reference */}
        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50/50 to-transparent z-10" />
          
          {/* First row */}
          <motion.div 
            className="flex gap-12 mb-8"
            animate={{ x: [0, -1800] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedLogos.slice(0, 14).map((logo, i) => (
              <div
                key={`row1-${logo.name}-${i}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-slate-600 font-medium whitespace-nowrap text-sm">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second row - reverse direction */}
          <motion.div 
            className="flex gap-12"
            animate={{ x: [-1800, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedLogos.slice(7).map((logo, i) => (
              <div
                key={`row2-${logo.name}-${i}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-slate-600 font-medium whitespace-nowrap text-sm">
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
