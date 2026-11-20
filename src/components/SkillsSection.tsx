import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'AI & TECHNICAL FOUNDATIONS',
    badge: 'RESEARCH CORE',
    items: [
      'Artificial Intelligence Fundamentals',
      'Machine Learning Fundamentals',
      'AI-Based Applications',
      'Voice Deepfake Detection',
      'Spectrogram Analysis',
      'Python',
    ],
    description: 'Hands-on experience in voice deepfake detection research at Universiti Teknikal Malaysia Melaka (UTeM). Applying ML models, spectrogram analysis, and biometric algorithms to detect synthetic audio.',
    stat: 'UTeM RESEARCH',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'CYBERSECURITY & DEFENSIVE TOOLS',
    badge: 'SECURITY SYSTEMS',
    items: ['Cybersecurity', 'Network Security', 'Linux', 'MySQL', 'Nmap', 'Hydra'],
    description: 'Equipped with defensive cybersecurity principles, network reconnaissance with Nmap, credential security auditing with Hydra, and Linux administration.',
    stat: 'DEFENSE AUDIT',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'AI SAFETY & GOVERNANCE',
    badge: 'ETHICAL FRONTIER',
    items: [
      'Responsible AI',
      'AI Safety',
      'AI Ethics',
      'Data Privacy',
      'Deepfake Detection',
      'AI-Generated Misinformation',
    ],
    description: 'Keen academic and research focus on the security challenges of emerging technologies, ethical AI frameworks, data privacy safeguarding, and mitigating AI-generated disinformation.',
    stat: 'TRUSTED AI',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'TECHNICAL TOOLS & IOT SYSTEMS',
    badge: 'IMPLEMENTATION',
    items: ['Arduino', 'Ultrasonic Sensors', 'Embedded Logic', 'HTML5', 'CSS3', 'JavaScript', 'GitHub'],
    description: 'Engineered autonomous embedded robotics with Arduino obstacle detection, developed responsive web interfaces, and managed relational schemas in MySQL.',
    stat: 'HARDWARE & WEB',
    colSpan: 'lg:col-span-7',
  },
];

const researchSkills = [
  'Technical Research',
  'Data Analysis',
  'Critical Thinking',
  'Risk Assessment',
  'Literature Review',
  'Problem-Solving',
  'Research Documentation',
];

const leadershipSkills = [
  'Public Speaking',
  'Debate',
  'Technical Presentations',
  'Research Communication',
  'Team Collaboration',
  'Initiative',
  'Adaptability',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECHNICAL CAPABILITIES
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              RESEARCH &amp; DEFENSE.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              SKILLS MATRIX.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] group-hover:text-[#F3DBB3] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F] group-hover:border-[#D4AF37]/50 group-hover:text-white transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#D5CBC0] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Analytical & Leadership Dual Pill Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Research & Analytical Skills */}
          <div className="p-6 border border-[#8C6D4F]/30 bg-[#0C0A08] rounded-sm">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-3">
              // RESEARCH &amp; ANALYTICAL RIGOR
            </span>
            <div className="flex flex-wrap gap-2">
              {researchSkills.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-[10px] tracking-wider uppercase border border-[#8C6D4F]/30 text-[#C4B29E] bg-[#14100D]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Communication & Leadership */}
          <div className="p-6 border border-[#8C6D4F]/30 bg-[#0C0A08] rounded-sm">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-3">
              // COMMUNICATION &amp; LEADERSHIP
            </span>
            <div className="flex flex-wrap gap-2">
              {leadershipSkills.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-[10px] tracking-wider uppercase border border-[#8C6D4F]/30 text-[#C4B29E] bg-[#14100D]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
