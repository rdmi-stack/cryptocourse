"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Though not used for mailto, good to have for other links

// You can use actual icons from a library like react-icons or heroicons
// For simplicity, I'll use placeholder "emoji" like characters or text.
// e.g., import { BriefcaseIcon, LightBulbIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// Animation Variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.3 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const cardHoverVariant = {
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px -5px rgba(250, 204, 21, 0.15)", // Subtle yellow glow
    transition: { duration: 0.3 }
  }
};

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  type: string; // e.g., Full-time, Part-time, Contract
  applyLink?: string; // Optional: for external ATS links, otherwise mailto will be used
}

const jobListingsData: JobListing[] = [
  {
    id: 'jd001',
    title: 'Senior Blockchain Architect',
    department: 'Technology & Innovation',
    location: 'Dubai, UAE / Remote',
    description: 'Lead the design and implementation of our next-generation decentralized platforms. Extensive experience with multiple blockchain protocols and smart contract security is crucial.',
    type: 'Full-time',
  },
  {
    id: 'jd002',
    title: 'Quantitative Crypto Trader',
    department: 'Trading & Alpha Generation',
    location: 'Dubai, UAE',
    description: 'Develop and deploy high-frequency trading strategies in the cryptocurrency markets. Strong background in statistical modeling, Python, and market microstructure required.',
    type: 'Full-time',
  },
  {
    id: 'jd003',
    title: 'Web3 Marketing Lead',
    department: 'Growth & Community',
    location: 'Remote',
    description: 'Spearhead our global marketing initiatives, build vibrant communities, and drive adoption for our Web3 products. Proven track record in crypto marketing essential.',
    type: 'Contract',
  },
  {
    id: 'jd004',
    title: 'AI Research Scientist - DeFi',
    department: 'Research & Development',
    location: 'Dubai, UAE / Remote',
    description: 'Apply cutting-edge AI/ML techniques to solve complex problems in DeFi, including risk assessment, yield optimization, and anomaly detection.',
    type: 'Full-time',
  },
];

const CareerPage: React.FC = () => {
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const yellowBorderColor = 'border-yellow-500';

  const generateMailtoLink = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} - Dubai Club`);
    const body = encodeURIComponent(
      `Dear Hiring Manager,\n\nI am writing to express my interest in the ${jobTitle} position advertised on the Dubai Club careers page.\n\nI have attached my resume for your review and welcome the opportunity to discuss how my skills and experience align with your requirements.\n\nThank you for your time and consideration.\n\nSincerely,\n[Your Name]`
    );
    return `mailto:career@dubaiclub.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gradient-to-b from-gray-950 via-black to-gray-950 text-neutral-200 overflow-x-hidden">

      {/* 1. Hero Section */}
      <motion.section
        className="relative py-24 md:py-32 lg:py-40 text-center overflow-hidden"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 opacity-10">
          {/* Optional subtle background pattern or abstract graphic */}
          {/* <Image src="/path-to-abstract-bg.svg" layout="fill" objectFit="cover" alt="Background pattern" /> */}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl font-bold ${yellowColor} mb-6`}
            style={{ textShadow: '0 0 20px rgba(250, 204, 21, 0.3)' }}
            variants={itemVariant}
          >
            Shape the Future with Dubai Club
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariant}
          >
            We are a collective of innovators, strategists, and visionaries dedicated to pioneering the next wave of financial technology. If you are driven by impact and thrive in a dynamic environment, your journey starts here.
          </motion.p>
          <motion.div variants={itemVariant}>
            <a
              href="#open-positions"
              className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black text-lg font-bold py-3 px-10 rounded-md transition duration-300 ease-in-out shadow-lg hover:shadow-yellow-500/40 transform hover:scale-105`}
            >
              View Open Roles
            </a>
          </motion.div>
        </div>
      </motion.section>

      <hr className="border-gray-800/50" />

      {/* 2. Why Join Us / Core Values Section */}
      <motion.section
        className="py-16 md:py-24 bg-black/20"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className={`font-serif text-4xl md:text-5xl font-bold ${yellowColor} text-center mb-16`}
            variants={itemVariant}
          >
            Why Build With Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: 'Innovate at the Edge', description: 'Work on groundbreaking projects that redefine finance with blockchain and AI.', icon: '💡' },
              { title: 'Global Impact', description: 'Contribute to solutions that have a tangible impact on a global scale.', icon: '🌍' },
              { title: 'Growth & Learning', description: 'We foster a culture of continuous learning, mentorship, and career advancement.', icon: '🚀' },
              { title: 'Dynamic Team', description: 'Collaborate with a diverse, passionate, and exceptionally talented team.', icon: '🤝' },
            ].map((value) => (
              <motion.div
                key={value.title}
                className="bg-gray-800/60 border border-gray-700/50 p-6 rounded-xl shadow-xl text-center"
                variants={itemVariant}
                whileHover={{ translateY: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)"}}
              >
                <div className="text-4xl mb-4">{value.icon}</div> {/* Replace with actual Icon component */}
                <h3 className="text-xl font-semibold text-neutral-100 mb-2">{value.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <hr className="border-gray-800/50" />

      {/* 3. Open Positions Section */}
      <motion.section
        id="open-positions"
        className="py-16 md:py-24"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className={`font-serif text-4xl md:text-5xl font-bold ${yellowColor} text-center mb-16`}
            variants={itemVariant}
          >
            Current Opportunities
          </motion.h2>

          {jobListingsData.length > 0 ? (
            <div className="space-y-8">
              {jobListingsData.map((job) => (
                <motion.div
                  key={job.id}
                  className="bg-gray-800/70 backdrop-blur-sm border border-gray-700/60 rounded-lg p-6 md:p-8 shadow-lg"
                  variants={itemVariant}
                  whileHover="hover" // Uses cardHoverVariant defined at the top
                >
                  <div className="md:flex md:justify-between md:items-start">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-1">{job.title}</h3>
                      <p className="text-neutral-400 text-sm mb-1">
                        <span className="font-medium text-neutral-300">{job.department}</span> | <span>{job.location}</span>
                      </p>
                      <span className={`inline-block px-3 py-0.5 text-xs font-semibold rounded-full mb-3 ${job.type === 'Full-time' ? 'bg-green-500/20 text-green-300' : 'bg-sky-500/20 text-sky-300'}`}>
                        {job.type}
                      </span>
                    </div>
                    <motion.a
                      href={job.applyLink || generateMailtoLink(job.title)}
                      target={job.applyLink ? "_blank" : "_self"}
                      rel={job.applyLink ? "noopener noreferrer" : ""}
                      className={`mt-4 md:mt-0 md:ml-6 inline-block whitespace-nowrap ${yellowBgColor} ${yellowHoverBgColor} text-black text-base font-semibold py-3 px-6 rounded-md transition duration-200 ease-in-out shadow-md hover:shadow-yellow-500/30 transform hover:scale-105`}
                      whileHover={{}} // Clear sub-variant if parent handles hover
                    >
                      Apply Now
                    </motion.a>
                  </div>
                  <p className="mt-4 text-neutral-300 leading-relaxed text-sm md:text-base">{job.description}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.p className="text-center text-neutral-400 text-lg" variants={itemVariant}>
              We currently have no open positions, but we are always looking for exceptional talent.
              Feel free to reach out!
            </motion.p>
          )}
        </div>
      </motion.section>

      <hr className="border-gray-800/50" />

      {/* 4. General Application CTA Section */}
      <motion.section
        className="py-16 md:py-24 bg-black/30"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-bold text-neutral-100 mb-4"
            variants={itemVariant}
          >
            Don't See Your Ideal Role?
          </motion.h2>
          <motion.p
            className="text-neutral-300 text-lg mb-8 max-w-xl mx-auto"
            variants={itemVariant}
          >
            We're always on the lookout for passionate individuals who believe in our mission. If you think you'd be a great fit for Dubai Club, send us your resume and tell us why.
          </motion.p>
          <motion.div variants={itemVariant}>
            <a
              href={generateMailtoLink("Spontaneous Application")}
              className={`inline-block bg-transparent border-2 ${yellowBorderColor} ${yellowColor} hover:bg-yellow-500 hover:text-black text-lg font-bold py-3 px-10 rounded-md transition duration-300 ease-in-out shadow-lg hover:shadow-yellow-500/40 transform hover:scale-105`}
            >
              Submit Your Profile
            </a>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default CareerPage;