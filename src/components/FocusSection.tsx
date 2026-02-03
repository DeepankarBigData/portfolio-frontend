

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Cloud, Users, Heart, ExternalLink } from 'lucide-react';
import pcbImage from '../assets/PCB.jpg';
import taxiImage from '../assets/taxi.jpg';
import insuranceImage from '../assets/insurance.jpg';
import invoice_project from '../assets/InvoiceExtraction.png';
import nexora_project from '../assets/Multiagent.png';
import TechnoSales from '../assets/TechnoSales.png';
import Sales from '../assets/Sales.png';
import statistics from '../assets/SkillLync.png';
import RAG from '../assets/RAG.png';
import opencv from '../assets/opencv.jpg';
import Manufacturing from '../assets/MANUBOT.png';
import pipeline from '../assets/pipeline.png'

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
        title: 'Invoice extraction',
        description: `End-to-end invoice extraction solution using an n8n-orchestrated workflow, context engineering, Azure Form Recognizer, a Python backend, and a React frontend.
A JavaScript-based backend was used to process invoices containing descriptive fields and a limited number of line items, while Azure Form Recognizer was leveraged for complex, highly structured tabular data.
This hybrid architecture reduced manual invoice processing effort by up to 80% and significantly improved automation, accuracy, and overall processing speed.`,
        image: invoice_project,
        category: 'corporate'
      },
      {
        title: 'Multi agent system',
        description: `Built a multi-agent system comprising a RAG agent and a CSV agent, and SQL agent with an authentication layer, session history management, and per-user workspaces using Python, enabling users to securely resume and revisit their previously processed chunks and interactions.`,
        image: nexora_project,
        category: 'corporate'
      },
      {
        title: 'RAG system for contracts',
        description:`'this is not LLM, its only retrieval from the contracts documents like terms like MRC, NRC, Agreement number, insurance of the Server, Limitations on liability, Force majeure termination, Extension term etc using azure AI search along with chunking strategy`,
        image: RAG,
        category: 'corporate'
      },
      {
        title: 'Mineral Detection using image processing and advance statistics',
        description: 'previously the probabibility of points before 10 %, we have reached to 40% after adding machine learning layer',
        image: opencv,
        category: 'corporate'
      },
      {
        title: 'Manufacturing Bot',
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
        title: 'PCB Fault Detection',
        description: `Problem Statement – Identifying faults in Printed circuit boards can be challenging due to complexity of the modern circuit designs 
                      Traditional methods rely heavily on manual inspection, which is time- consuming, prone to errors, and can lead to increased production costs.


                      Faulty PCBs may go undetected during production, leading to higher reject rates, increased rework costs, and potential damage to brand reputation and also guranttee issues. 

                      Solution in market - Hardware
                      Advanced diagnostic tools, such as oscilloscopes, mustimeters, and thermal imaging cameras, can provide more in -depth analysis of PCB failure.These tools can measure electrical signals, detect short circuits, identify temperature variations, and pinpoint specific areas of concern, assisting in a more accurate diagnosis. 

                      Our Solution – Software 
                      Automated Fault Detection System: we will Develop an AI - powered system capable of quickly and accurately detecting faults in PCBs using techniques such as machine learning, computer vision, and signal processing.i.e automated PCB fault detection systems 
                      Impact - the fault detection process will increase production efficiency, shorten time to - market, and enable companies to meet customer demands more effectively.`,
        image: pcbImage,
        link: 'https://github.com/DeepankarBigData/Printed-Circuit-Board-PCB-Fault-detection',
        category: 'hackathon'
      },
      {
        title: 'Medical Insurance Premium Prediction',
        description: `we are living in a world of dangers and risks,These risks include the risk of death, illness, and the loss of property or possessions. As a result, insurance is a policy that reduces or eliminates the expenses of various risks. An individual who has purchased a health insurance policy receives coverage after paying a certain premium. The cost of health insurance is determined by a variety of factors. One who purchases this type of insurance has to pay premiums monthly and this premium amount varies vastly depending upon various factors such as Age, Gender, Body Mass Index, Number of children, Smoking Habits and Geographic Location. The goal of this project is to give people an estimate of
how much premium they have to pay per month based on their individual health
situation. It was a regression problem which gave r2_score of 85 %`,
        image: insuranceImage,
        link: 'https://github.com/DeepankarBigData/Insurance-Charges-Prediction',
        category: 'personal'
      },
      {
        title: 'Taxi Fare Prediction',
        description: `Users today demand transparency in taxi services, wanting to know the estimated ride cost before confirming it. The lack of clear pricing information leads to dissatisfaction and reluctance in using taxis. This uncertainty becomes a barrier to service utilization, causing frustration among users. Unpredictable pricing erodes trust in taxi services, and for passengers to trust providers, reliable and fair pricing is crucial.
Predictable and fair pricing is essential for customer satisfaction. Disputes over fares can lead to tense situations, affecting overall safety. To address these issues and save users from unfair practices, there is a pressing need to develop a model for accurate taxi fare prediction. 
The project's objective is to create a machine Learning model that can accurately predict and analyze taxi fares based on distance, number of passenger, pickup and drop-off points assisting the passenger, tourists who are unfamiliar with the fare amounts in the city`,
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









