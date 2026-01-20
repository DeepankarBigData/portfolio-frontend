import { motion } from 'framer-motion';

const AIBackgroundAnimation = () => {
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-800/50" />
      
      {/* Dotted grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-slate-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Animated bar chart - left side */}
      <div className="absolute left-[5%] top-[30%] flex items-end gap-2 opacity-20">
        {chartBars.map((bar, i) => (
          <motion.div
            key={i}
            className="w-3 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: [0, bar.height, bar.height * 0.8, bar.height] }}
            transition={{
              duration: 3,
              delay: bar.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Line chart - right side */}
      <svg className="absolute right-[5%] top-[25%] w-32 h-20 opacity-20">
        <motion.path
          d="M 0 60 L 20 40 L 40 50 L 60 20 L 80 35 L 100 15 L 120 25"
          fill="none"
          stroke="url(#chartGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating data cards */}
      {dataCards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 opacity-30"
          style={{ left: `${card.x}%`, top: `${card.y}%` }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{card.icon}</span>
            <div>
              <p className="text-[10px] text-slate-400">{card.label}</p>
              <p className="text-sm font-semibold text-white">{card.value}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Flow diagram */}
      <div className="absolute left-[20%] bottom-[15%] opacity-15">
        <svg className="w-80 h-16">
          {/* Connection lines */}
          {flowNodes.slice(0, -1).map((_, i) => (
            <motion.line
              key={i}
              x1={20 + i * 80}
              y1={30}
              x2={60 + i * 80}
              y2={30}
              stroke="#64748b"
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
              fill="#64748b"
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
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
              }}
            >
              <span className="text-[10px] text-slate-300 font-medium">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Circular progress indicators */}
      {progressCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{ 
            left: `${circle.x}%`, 
            top: `${circle.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
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
              animate={{ strokeDasharray: `${circle.progress * 2.83} 283` }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating hexagons - tech pattern */}
      <motion.div
        className="absolute top-[10%] left-[50%] opacity-10"
        animate={{ rotate: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill="none"
            stroke="#64748b"
            strokeWidth="1"
          />
          <polygon
            points="50,20 75,35 75,65 50,80 25,65 25,35"
            fill="none"
            stroke="#64748b"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Binary code rain effect */}
      <div className="absolute left-[60%] top-[10%] opacity-10">
        {[0, 1, 2].map((col) => (
          <motion.div
            key={col}
            className="inline-block text-xs font-mono text-slate-400 mx-1"
            animate={{ y: [0, 100], opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              delay: col * 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {['1', '0', '1', '1', '0', '0', '1'].map((bit, i) => (
              <div key={i}>{bit}</div>
            ))}
          </motion.div>
        ))}
      </div>

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
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan-400/20"
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}

      {/* Soft glowing orbs for depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AIBackgroundAnimation;
