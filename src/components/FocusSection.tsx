

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Cloud, Users, Heart, ExternalLink } from 'lucide-react';
import pcbImage from '../assets/PCB.jpg';
import taxiImage from '../assets/taxi.jpg';
import insuranceImage from '../assets/insurance.jpg';
import invoice_project from '../assets/InvoiceExtraction.png';
import nexora_project from '../assets/MultiAgent.png';
import TechnoSales from '../assets/technoSales.png';
import Sales from '../assets/Sales.png';
import statistics from '../assets/SkillLync.png';
import RAG from '../assets/RAG.png';
import opencv from '../assets/Opencv.jpg';
import Manufacturing from '../assets/MANUBOT.png';
import pipeline from '../assets/pipeline.png'
import synapse from '../assets/synapse_analytics.jpg' 
const API_BASE = import.meta.env.VITE_API_BASE_URL;

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
  category?: 'corporate' | 'hackathon' | 'personal' | 'Numerical Analysis';
};

type FocusArea = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  projects?: Project[];
  items?: { icon: string; title: string }[];
};

const focusAreas: FocusArea[] = [
  {
    id: 'aiml',
    label: 'AI/ML Projects',
    title: 'AI/ML Projects',
    description: 'End-to-end machine learning solutions from feature engineering to production deployment.',
    icon: <Brain className="w-5 h-5" />,
    projects: [
      {
        title: 'Invoice extraction | Recon AI invoice Extractor',
        description: `Built an AI-powered invoice extraction system using Python, Azure Form Recognizer, and n8n workflows, improving processing efficiency by 92%.`,
        image: invoice_project,
        category: 'corporate'
      },
      {
        title: 'Agentic RAG',
        description: `Built an Agentic-RAG system comprising a RAG agent and a CSV agent, and SQL agent with an authentication layer, session history management, and per-user workspaces using Python, enabling users to securely resume and revisit their previously processed chunks and interactions.`,
        image: nexora_project,
        category: 'corporate'
      },
      {
        title: 'Contract Intelligence System',
        description: `Implemented a contract intelligence retrieval system using Azure AI Search and optimized chunking strategies, enabling accurate extraction of key contractual clauses and further processing it with LLMs.`,
        image: RAG,
        category: 'corporate'
      },
      {
        title: 'Mineral Detection using image processing and advance statistics',
        description: 'Built a deep learning-based mineral detection system using remote sensing data, increasing prediction accuracy from 10% to 40% for identifying viable drilling locations.',
        image: opencv,
        category: 'corporate'
      },
      {
        title: 'Manufacturing Bot POC',
        description: `A manufacturing BOT based on intent Intent classifcation for answering the labors availability. (used by builders, owners)`,
        image: Manufacturing,
        category: 'corporate'
      },
      {
        title: 'pipeline completion time prediction prediction',
        description: 'Built an Azure ML–based pipeline end-time prediction system using Python and historical log data. Successfully trained an XGBoost model achieving up to 85% accuracy in predicting pipeline completion time.',
        image: pipeline,
        category: 'corporate'
      },
      {
        title: 'Data Migration (Azure synapse Analytics',
        description: 'Worked on data migration project using Azure Synapse Analytics, ensuring accuracy and reliability.- Optimized complex SQL queries for performance and scalability.- Performed data validation and unit testing to maintain high data quality standards.- Set up Linked Services and Integration Runtimes (IR) for connecting data to the respective sources.- Created and managed Lake Database tables to structure and organize data in Azure Data Lake.- Built Synapse Notebooks leveraging fuzzy logic for intelligent data matching and transformation. This experience strengthened my foundation in cloud data engineering, ETL processes, and data quality frameworks, which complements my long-term goal of building AI-driven data solutions.',
        image: synapse,
        category: 'corporate'
      },
      {
        title: 'PCB Fault Detection',
        description: `Developed an AI-based PCB fault detection system using machine learning, computer vision, and signal processing, improving defect detection accuracy and reducing manual inspection efforts.`,
        image: pcbImage,
        link: 'https://github.com/DeepankarBigData/Printed-Circuit-Board-PCB-Fault-detection',
        category: 'hackathon'
      },
      {
        title: 'Medical Insurance Premium Prediction',
        description: `Built a regression-based machine learning model for health insurance premium prediction, achieving an R² score of 0.85 using demographic and health-related features.`,
        image: insuranceImage,
        link: 'https://github.com/DeepankarBigData/Insurance-Charges-Prediction',
        category: 'personal'
      },
      {
        title: 'Taxi Fare Prediction',
        description: `Developed a machine learning model for taxi fare prediction using trip and location data, improving pricing transparency and enhancing user decision-making.`,
        image: taxiImage,
        link: 'https://github.com/DeepankarBigData/Taxi-Fare-Prediction',
        category: 'personal'
      },
      {
        title: 'Techno Sales Analysis',
        description: '',
        image: TechnoSales,
        link: 'https://app.powerbi.com/view?r=eyJrIjoiMmI2ZDA2MjUtNWUxZi00OTAzLWI0ZmUtZTIyNWViNzI1MTcxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
        category: 'personal'
      },
      {
        title: 'Sales Analysis report',
        description: 'sales report',
        image: Sales,
        link: 'https://app.powerbi.com/view?r=eyJrIjoiMWNlYjg3MzgtMDliYi00MTNhLTg1NmUtODk5Y2VjYWEwYzViIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
        category: 'personal'
      },
      {
        title: 'Projects on statistics and numerical Analysis',
        description: '',
        image: statistics,
        link: 'https://skill-lync.com/profiles/deepankar-pawar',
        category: 'Numerical Analysis'
      }
    ]
  },
  {
    id: 'genai',
    label: 'Gen AI',
    title: 'Generative AI Systems',
    description: 'I prototype RAG agents for support desks, research assistants for analysts, and policy-aligned chat experiences powered by LangChain, LlamaIndex, and LangGraph.',
    icon: <Sparkles className="w-5 h-5" />,
    items: [
      { icon: '🤖', title: 'Retrieval copilots' },
      { icon: '📚', title: 'Knowledge curation' },
      { icon: '🛡️', title: 'Eval + guardrails' }
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud',
    title: 'Cloud & Data Platforms',
    description: 'Azure, Kubernetes, Github Actions, spark, and observability stacks keep my deployments calm. Infrastructure is code, metrics are built-in, and rollbacks are rehearsed.',
    icon: <Cloud className="w-5 h-5" />,
    items: [
      { icon: '☁️', title: 'Azure + Kubernetes' },
      { icon: '🌊', title: 'Streaming pipelines' },
      { icon: '🔐', title: 'Secure APIs' }
    ]
  },
  {
    id: 'leadership',
    label: 'Leadership',
    title: 'Business & Leadership',
    description: 'MBA coursework in finance helps me map every model to a business lever. I lead rituals, unblock teams, and write docs that keep priorities aligned.',
    icon: <Users className="w-5 h-5" />,
    items: [
      { icon: '🎓', title: 'first principles thinking' },
      { icon: '📖', title: 'Product storytelling' },
      { icon: '👥', title: 'Team rituals' }
    ]
  },
  {
    id: 'wellness',
    label: 'Wellness',
    title: 'Wellness & Discipline',
    description: 'Fitness, mindfulness, and purpose-driven routines fuel the energy behind each build. Strong fundamentals outside the laptop show up in the work.',
    icon: <Heart className="w-5 h-5" />,
    items: [
      { icon: '💪', title: 'Fitness streaks' },
      { icon: '✅', title: 'Habit systems' },
      { icon: '🤲', title: 'Community giving' }
    ]
  }
];

const FocusSection = () => {
  const [activeTab, setActiveTab] = useState('aiml');
  const activeArea = focusAreas.find(area => area.id === activeTab)!;

  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case 'corporate':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-700',
          label: '💼 Corporate'
        };
      case 'Numerical Analysis':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-900',
          label: '💼 Numerical Analysis'
        };
      case 'hackathon':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-700',
          label: '🏆 Hackathon'
        };
      case 'personal':
        return {
          bg: 'bg-green-100',
          text: 'text-green-700',
          label: '⭐ Personal'
        };
      default:
        return {
          bg: 'bg-slate-100',
          text: 'text-slate-700',
          label: 'Project'
        };
    }
  };

  return (
    <section id="focus" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Pill Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {focusAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${activeTab === area.id
                ? 'bg-slate-900 text-white shadow-lg'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
            >
              {area.icon}
              <span className="hidden sm:inline">{area.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* AI/ML Projects - Special project-style layout */}
            {activeTab === 'aiml' && activeArea.projects ? (
              <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    Projects
                  </h2>
                  <div className="w-16 h-1 bg-slate-400 rounded-full" />
                </div>

                {/* Project Cards */}
                <div className="space-y-16">
                  {activeArea.projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className="grid md:grid-cols-2 gap-8 items-start"
                    >
                      {/* Project Image */}
                      <div className="relative group">
                        <div className="aspect-[4/3] rounded-lg border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                            {project.title}
                          </h3>
                          {project.category && (
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryBadge(project.category).bg} ${getCategoryBadge(project.category).text}`}>
                              {getCategoryBadge(project.category).label}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {project.description}
                        </p>
                        {project.link && (
                          <a
                            href={project.link}
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors group text-base"
                          >
                            View Project
                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              /* Other Focus Areas - Original layout */
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
                {/* Left - Description */}
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                    {activeArea.label}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                    {activeArea.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {activeArea.description}
                  </p>
                </div>

                {/* Right - Items */}
                <div className="space-y-4">
                  {activeArea.items?.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <span className="font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                        {item.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FocusSection;









