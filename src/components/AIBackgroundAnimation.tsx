import { motion } from 'framer-motion';
import { useState } from 'react';

const AIBackgroundAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Data points for animated chart bars
  const chartBars = [
    { height: 40, delay: 0 },
    { height: 65, delay: 0.1 },
    { height: 45, delay: 0.2 },
    { height: 80, delay: 0.3 },
    { height: 55, delay: 0.4 },
    { height: 70, delay: 0.5 },
    { height: 50, delay: 0.6 },
  ];

  // Floating data cards
  const dataCards = [
    { x: 8, y: 20, icon: '📊', label: 'ML Models', value: '95%' },
    { x: 78, y: 15, icon: '🧠', label: 'Neural Nets', value: '12' },
    { x: 85, y: 55, icon: '⚡', label: 'API Calls', value: '1.2M' },
    { x: 5, y: 65, icon: '📈', label: 'Accuracy', value: '98.5%' },
  ];

  // Flow diagram nodes
  const flowNodes = [
    { x: 15, y: 40, label: 'Data' },
    { x: 35, y: 40, label: 'Process' },
    { x: 55, y: 40, label: 'Model' },
    { x: 75, y: 40, label: 'Deploy' },
  ];

  // Circular progress indicators
  const progressCircles = [
    { x: 90, y: 80, progress: 75, size: 60, color: 'blue' },
    { x: 10, y: 85, progress: 88, size: 50, color: 'purple' },
  ];

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-auto cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-800/50" />
      
      {/* Dotted grid pattern */}
      <motion.svg 
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: isHovered ? 0.25 : 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-slate-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </motion.svg>

      {/* Animated bar chart - left side */}
      <motion.div 
        className="absolute left-[5%] top-[30%] flex items-end gap-2"
        animate={{ opacity: isHovered ? 0.6 : 0.2, scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
      >
        {chartBars.map((bar, i) => (
          <motion.div
            key={i}
            className="w-3 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
            initial={{ height: 0 }}
            animate={{ 
              height: [0, bar.height, bar.height * 0.8, bar.height],
              boxShadow: isHovered 
                ? '0 0 12px rgba(6, 182, 212, 0.5)' 
                : '0 0 0px rgba(6, 182, 212, 0)'
            }}
            transition={{
              height: {
                duration: 3,
                delay: bar.delay,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              },
              boxShadow: { duration: 0.4 }
            }}
          />
        ))}
      </motion.div>

      {/* Line chart - right side */}
      <motion.svg 
        className="absolute right-[5%] top-[25%] w-32 h-20"
        animate={{ opacity: isHovered ? 0.6 : 0.2, scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.path
          d="M 0 60 L 20 40 L 40 50 L 60 20 L 80 35 L 100 15 L 120 25"
          fill="none"
          stroke="url(#chartGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            filter: isHovered ? 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.6))' : 'none'
          }}
          transition={{
            pathLength: {
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            },
            filter: { duration: 0.4 }
          }}
        />
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Floating data cards */}
      {dataCards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2"
          style={{ left: `${card.x}%`, top: `${card.y}%` }}
          animate={{
            y: [0, -8, 0],
            opacity: isHovered ? 0.8 : 0.25,
            scale: isHovered ? 1.1 : 1,
            borderColor: isHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
            boxShadow: isHovered 
              ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)' 
              : '0 0 0 rgba(0,0,0,0)',
          }}
          transition={{
            y: {
              duration: 4 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
            borderColor: { duration: 0.4 },
            boxShadow: { duration: 0.4 },
          }}
        >
          <div className="flex items-center gap-2">
            <motion.span 
              className="text-lg"
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.icon}
            </motion.span>
            <div>
              <p className="text-[10px] text-slate-400">{card.label}</p>
              <motion.p 
                className="text-sm font-semibold text-white"
                animate={{ 
                  textShadow: isHovered ? '0 0 10px rgba(255,255,255,0.5)' : 'none' 
                }}
                transition={{ duration: 0.4 }}
              >
                {card.value}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Flow diagram */}
      <motion.div 
        className="absolute left-[20%] bottom-[15%]"
        animate={{ opacity: isHovered ? 0.5 : 0.15 }}
        transition={{ duration: 0.4 }}
      >
        <svg className="w-80 h-16">
          {/* Connection lines */}
          {flowNodes.slice(0, -1).map((_, i) => (
            <motion.line
              key={i}
              x1={20 + i * 80}
              y1={30}
              x2={60 + i * 80}
              y2={30}
              stroke={isHovered ? "#94a3b8" : "#64748b"}
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
          {/* Arrows */}
          {flowNodes.slice(0, -1).map((_, i) => (
            <motion.polygon
              key={`arrow-${i}`}
              points={`${60 + i * 80},25 ${60 + i * 80},35 ${70 + i * 80},30`}
              fill={isHovered ? "#94a3b8" : "#64748b"}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.3 + 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </svg>
        <div className="flex gap-[52px] -mt-10 ml-1">
          {flowNodes.map((node, i) => (
            <motion.div
              key={i}
              className="w-14 h-14 rounded-xl bg-slate-700/50 border border-slate-600/50 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                borderColor: isHovered ? 'rgba(148, 163, 184, 0.5)' : 'rgba(71, 85, 105, 0.5)',
                boxShadow: isHovered 
                  ? '0 0 15px rgba(6, 182, 212, 0.3)' 
                  : '0 0 0 rgba(0,0,0,0)',
              }}
              transition={{
                scale: { duration: 0.5, delay: i * 0.2 },
                opacity: { duration: 0.5, delay: i * 0.2 },
                borderColor: { duration: 0.4 },
                boxShadow: { duration: 0.4 },
              }}
            >
              <motion.span 
                className="text-[10px] text-slate-300 font-medium"
                animate={{ 
                  color: isHovered ? '#e2e8f0' : '#cbd5e1',
                  textShadow: isHovered ? '0 0 8px rgba(255,255,255,0.3)' : 'none'
                }}
                transition={{ duration: 0.4 }}
              >
                {node.label}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Circular progress indicators */}
      {progressCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ 
            left: `${circle.x}%`, 
            top: `${circle.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ 
            rotate: 360,
            opacity: isHovered ? 0.6 : 0.2,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
        >
          <svg width={circle.size} height={circle.size} viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#334155"
              strokeWidth="6"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={circle.color === 'blue' ? '#3b82f6' : '#8b5cf6'}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${circle.progress * 2.83} 283`}
              transform="rotate(-90 50 50)"
              initial={{ strokeDasharray: '0 283' }}
              animate={{ 
                strokeDasharray: `${circle.progress * 2.83} 283`,
                filter: isHovered 
                  ? `drop-shadow(0 0 8px ${circle.color === 'blue' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(139, 92, 246, 0.6)'})` 
                  : 'none'
              }}
              transition={{
                strokeDasharray: {
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                },
                filter: { duration: 0.4 }
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating hexagons - tech pattern */}
      <motion.div
        className="absolute top-[10%] left-[50%]"
        animate={{ 
          rotate: [0, 60, 0],
          opacity: isHovered ? 0.35 : 0.1,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
        }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <motion.polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill="none"
            stroke={isHovered ? "#94a3b8" : "#64748b"}
            strokeWidth="1"
            animate={{ 
              filter: isHovered ? 'drop-shadow(0 0 5px rgba(148, 163, 184, 0.5))' : 'none' 
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.polygon
            points="50,20 75,35 75,65 50,80 25,65 25,35"
            fill="none"
            stroke={isHovered ? "#94a3b8" : "#64748b"}
            strokeWidth="1"
            animate={{ 
              filter: isHovered ? 'drop-shadow(0 0 5px rgba(148, 163, 184, 0.5))' : 'none' 
            }}
            transition={{ duration: 0.4 }}
          />
        </svg>
      </motion.div>

      {/* Binary code rain effect */}
      <motion.div 
        className="absolute left-[60%] top-[10%]"
        animate={{ opacity: isHovered ? 0.35 : 0.1 }}
        transition={{ duration: 0.4 }}
      >
        {[0, 1, 2].map((col) => (
          <motion.div
            key={col}
            className="inline-block text-xs font-mono text-slate-400 mx-1"
            animate={{ 
              y: [0, 100], 
              opacity: [0, 1, 0],
              color: isHovered ? '#94a3b8' : '#64748b',
              textShadow: isHovered ? '0 0 8px rgba(6, 182, 212, 0.5)' : 'none',
            }}
            transition={{
              y: { duration: 4, delay: col * 0.8, repeat: Infinity, ease: "linear" },
              opacity: { duration: 4, delay: col * 0.8, repeat: Infinity, ease: "linear" },
              color: { duration: 0.4 },
              textShadow: { duration: 0.4 },
            }}
          >
            {['1', '0', '1', '1', '0', '0', '1'].map((bit, i) => (
              <div key={i}>{bit}</div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Pulsing data nodes */}
      {[
        { x: 25, y: 70 },
        { x: 70, y: 75 },
        { x: 45, y: 25 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-cyan-400/30"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{
            scale: isHovered ? [1.2, 2, 1.2] : [1, 1.5, 1],
            opacity: isHovered ? [0.6, 0.9, 0.6] : [0.3, 0.6, 0.3],
            boxShadow: isHovered 
              ? '0 0 20px rgba(6, 182, 212, 0.6)' 
              : '0 0 0 rgba(6, 182, 212, 0)',
          }}
          transition={{
            scale: { duration: 2 + i * 0.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2 + i * 0.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 0.4 },
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan-400/20"
            animate={{ 
              scale: [1, 2.5], 
              opacity: [0.5, 0],
              borderColor: isHovered ? 'rgba(6, 182, 212, 0.5)' : 'rgba(6, 182, 212, 0.2)',
            }}
            transition={{
              scale: { duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" },
              opacity: { duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" },
              borderColor: { duration: 0.4 },
            }}
          />
        </motion.div>
      ))}

      {/* Soft glowing orbs for depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -15, 0],
          opacity: isHovered ? 0.15 : 0.05,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ 
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 15, 0],
          opacity: isHovered ? 0.15 : 0.05,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ 
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
        }}
      />
    </div>
  );
};

export default AIBackgroundAnimation;
