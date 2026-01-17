import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Sparkles, Cloud, Users, Heart, ChevronRight } from 'lucide-react';

type FocusArea = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: { icon: string; title: string }[];
};

const focusAreas: FocusArea[] = [
  {
    id: 'aiml',
    label: 'Focus 01',
    title: 'AI/ML Engineering',
    description: 'I ship models that watch over payments and lending journeys — from feature stores to monitoring dashboards — and keep them honest with evaluation loops.',
    icon: <Brain className="w-5 h-5" />,
    items: [
      { icon: '🎯', title: 'Fraud signal stores' },
      { icon: '📊', title: 'Credit risk models' },
      { icon: '📈', title: 'Realtime health boards' }
    ]
  },
  {
    id: 'automation',
    label: 'Focus 02',
    title: 'Fintech Automation',
    description: 'Pairing domain knowledge with low-friction automation — workflow APIs, alerting, and ops playbooks — so finance teams can move faster with confidence.',
    icon: <Zap className="w-5 h-5" />,
    items: [
      { icon: '💳', title: 'Payment rails tooling' },
      { icon: '🔔', title: 'Compliance-ready alerts' },
      { icon: '🤝', title: 'Operator handoffs' }
    ]
  },
  {
    id: 'genai',
    label: 'Focus 03',
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
    label: 'Focus 04',
    title: 'Cloud & Data Platforms',
    description: 'AWS, Kubernetes, Kafka, Airflow, and observability stacks keep my deployments calm. Infrastructure is code, metrics are built-in, and rollbacks are rehearsed.',
    icon: <Cloud className="w-5 h-5" />,
    items: [
      { icon: '☁️', title: 'AWS + Kubernetes' },
      { icon: '🌊', title: 'Streaming pipelines' },
      { icon: '🔐', title: 'Secure APIs' }
    ]
  },
  {
    id: 'leadership',
    label: 'Focus 05',
    title: 'Business & Leadership',
    description: 'MBA coursework in finance helps me map every model to a business lever. I lead rituals, unblock teams, and write docs that keep priorities aligned.',
    icon: <Users className="w-5 h-5" />,
    items: [
      { icon: '🎓', title: 'MBA finance lens' },
      { icon: '📖', title: 'Product storytelling' },
      { icon: '👥', title: 'Team rituals' }
    ]
  },
  {
    id: 'wellness',
    label: 'Focus 06',
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

  return (
    <section id="focus" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Pill Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {focusAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === area.id 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              {area.icon}
              <span className="hidden sm:inline">{area.title.split(' ')[0]}</span>
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
            className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto"
          >
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

            {/* Right - Project-style items */}
            <div className="space-y-4">
              {activeArea.items.map((item, index) => (
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
                  <ChevronRight className="ml-auto text-slate-400 group-hover:text-slate-600 transition-colors" size={20} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FocusSection;
