// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  highlight?: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'RESEARCH FELLOWSHIP',
    title: 'INTERNATIONAL CYBERSECURITY & AI RESEARCH',
    organization: 'UNIVERSITI TEKNIKAL MALAYSIA MELAKA (UTeM)',
    description:
      'Gained international research experience investigating voice deepfake detection, IoT security, and defensive methodologies against synthetic media. Applied spectrogram analysis and biometric voiceprint modeling to distinguish manipulated speech from authentic voiceprints.',
    highlight: 'INTERNATIONAL RESEARCH',
  },
  {
    id: '02',
    year: '2023 – 2026',
    title: 'B.TECH IN COMPUTER SCIENCE & ENGINEERING',
    organization: 'PACE INSTITUTE OF TECHNOLOGY AND SCIENCES, ONGOLE',
    description:
      'Specializing in IoT, Cybersecurity & Blockchain with an exceptional CGPA of 8.8/10. Undertaking advanced coursework in network defense, cryptography, ethical AI, and embedded system programming.',
    highlight: 'CGPA: 8.8 / 10',
  },
  {
    id: '03',
    year: '2020 – 2023',
    title: 'DIPLOMA IN COMPUTER SCIENCE / ENGINEERING',
    organization: 'PACE INSTITUTE OF TECHNOLOGY AND SCIENCES, ONGOLE',
    description:
      'Developed strong foundational skills in computer architecture, hardware interfacing, and robotics. Spearheaded the Human Following Robot diploma project utilizing Arduino microcontrollers and ultrasonic sensors.',
    highlight: 'AUTONOMOUS ROBOT PROJECT',
  },
  {
    id: '04',
    year: '2019 – 2020',
    title: 'SECONDARY SCHOOL CERTIFICATE (SSC)',
    organization: "SAINT JOHN'S ENGLISH MEDIUM SCHOOL",
    description:
      'Graduated with a perfect CGPA of 10.0/10, demonstrating unwavering academic excellence, analytical discipline, and scholastic dedication.',
    highlight: 'CGPA: 10.0 / 10 (PERFECT)',
  },
];

const certifications = [
  {
    title: 'Introduction to Web Development',
    issuer: 'Certified in HTML5, CSS3, and JavaScript',
    category: 'FULL-STACK / WEB',
  },
  {
    title: 'Java Programming Certification',
    issuer: 'Completed through Spoken Tutorial',
    category: 'OBJECT-ORIENTED PROGRAMMING',
  },
  {
    title: 'Cybersecurity Fundamentals Program',
    issuer: 'Tech Mahindra Foundation via Skill India Digital Hub',
    category: 'CYBERSECURITY & DEFENSE',
  },
  {
    title: 'Gamified Cyber Awareness Certification',
    issuer: 'Cybersecurity awareness and safe digital practices',
    category: 'DIGITAL SECURITY AWARENESS',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

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
            04 / TRAJECTORY
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              RESEARCH &amp; EDUCATION.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full mb-20">

          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[170px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[170px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[170px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[170px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                    {stop.highlight && (
                      <span className="text-[9px] font-mono px-2 py-0.5 border border-[#D4AF37]/40 text-[#D4AF37] bg-[#14100D]">
                        {stop.highlight}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {stop.title}
                    </h3>
                    {stop.highlight && (
                      <span className="hidden md:inline-block text-[9px] font-mono px-2 py-0.5 border border-[#D4AF37]/40 text-[#D4AF37] bg-[#14100D]">
                        {stop.highlight}
                      </span>
                    )}
                  </div>

                  <span
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>

                  <p
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-2xl group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Certifications & Accreditations Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-10 border-t border-[#8C6D4F]/25"
        >
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37]">
              // CERTIFICATIONS &amp; CREDENTIALS
            </span>
            <div className="w-16 h-[1px] bg-[#D4AF37]/50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0B09] hover:border-[#D4AF37]/80 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {cert.category}
                  </span>
                  <span className="text-xs text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">
                    ✓
                  </span>
                </div>
                <h4
                  className="text-2xl text-white group-hover:text-[#F7E7C4] transition-colors leading-tight mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cert.title}
                </h4>
                <p
                  className="text-xs text-[#A8988B] font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;
