// app/about/page.tsx
"use client"; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; // If adding internal links/CTA

// Animation Variants (similar to previous examples)
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const cardHoverEffect = {
  scale: 1.04,
  boxShadow: "0px 10px 30px rgba(250, 204, 21, 0.1)", // Yellowish glow
  borderColor: "rgba(250, 204, 21, 0.5)", // Yellow border
};

// Values Data
const coreValues = [
  { title: "Research-Driven", description: "Our strategies are built on rigorous market analysis and deep fundamental research." },
  { title: "Innovation", description: "We leverage cutting-edge technology, including AI, to identify unique market opportunities." },
  { title: "Trust & Transparency", description: "Building long-term relationships through clear communication and reliable guidance." },
  { title: "Data Security", description: "Prioritizing the security and confidentiality of all user information." }
];

const AboutPage: React.FC = () => {
  const yellowColor = 'text-yellow-400';

  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-x-hidden">

      {/* 1. About Hero Section */}
      <motion.section
        className="relative py-32 md:py-48 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/about-hero-bg.jpg" // Replace with a suitable abstract/team/office background
            alt="About Dubai Club Background"
            layout="fill"
            objectFit="cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <motion.div className="container mx-auto px-4 sm:px-6 relative z-10" variants={itemVariant}>
          <h1
            className={`font-serif text-5xl md:text-7xl font-bold ${yellowColor} mb-4`}
            style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.4)' }}
          >
            Simplifying Crypto Investing
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
            Empowering you with expert insights and data-driven strategies for navigating the world of digital assets.
          </p>
        </motion.div>
      </motion.section>

      {/* 2. Our Story / The 'Why' */}
      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
        >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.h2
             className={`font-serif text-4xl md:text-5xl font-bold ${yellowColor} mb-5`}
             style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
             variants={itemVariant}
             >
            Behind Dubai Club
          </motion.h2>
           <motion.hr className="w-24 h-0.5 mx-auto mb-8 bg-yellow-500/50 border-0 rounded" variants={itemVariant} />
          <motion.p className="text-lg md:text-xl text-neutral-300 leading-relaxed md:leading-loose mb-4" variants={itemVariant}>
            Dubai Club is helmed by <span className="text-neutral-100">crypto veterans</span> and <span className="text-neutral-100">blockchain experts</span> with a collective experience of over a decade in financial markets. We saw a need for clear, reliable guidance in the often complex and volatile crypto space.
          </motion.p>
          <motion.p className="text-lg md:text-xl text-neutral-300 leading-relaxed md:leading-loose" variants={itemVariant}>
            Built on a solid foundation of <span className="text-neutral-100">research</span>, <span className="text-neutral-100">innovation</span>, and <span className="text-neutral-100">trust</span>, Dubai Club ensures that every decision reflected in our model portfolios is <span className="text-neutral-100">secure</span>, <span className="text-neutral-100">data-driven</span>, and <span className="text-neutral-100">strategically calculated</span>.
          </motion.p>
        </div>
      </motion.section>

       {/* 3. Our Mission & Vision */}
      <motion.section
        className="py-16 md:py-24 bg-gray-950/40" // Slight background difference
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
        >
        <div className="container mx-auto px-4 sm:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
             <motion.div variants={itemVariant}>
               <h3 className={`font-serif text-3xl md:text-4xl font-bold ${yellowColor} mb-4`}>Our Mission</h3>
               <p className="text-lg text-neutral-300 leading-relaxed">
                 To demystify the cryptocurrency market and empower investors of all levels with accessible, actionable, and data-driven insights for informed decision-making.
               </p>
             </motion.div>
             <motion.div variants={itemVariant}>
               <h3 className={`font-serif text-3xl md:text-4xl font-bold ${yellowColor} mb-4`}>Our Vision</h3>
               <p className="text-lg text-neutral-300 leading-relaxed">
                 To be India's most trusted and sought-after platform for crypto investment guidance, fostering financial literacy and helping our members navigate the future of digital finance confidently.
               </p>
             </motion.div>
           </div>
        </div>
      </motion.section>


      {/* 4. Our Values */}
      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className={`font-serif text-4xl md:text-5xl font-bold ${yellowColor} text-center mb-12 md:mb-16`}
              style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gradient-to-br from-gray-900 to-gray-800/90 border border-gray-700/50 rounded-xl p-6 text-center shadow-lg"
                variants={itemVariant}
                whileHover={cardHoverEffect}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for potential future icons */}
                {/* <div className="mb-4 text-yellow-400">[ICON]</div> */}
                <h4 className="text-xl font-semibold text-neutral-100 mb-2">{value.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* 5. Our Approach / Expertise */}
       <motion.section
        className="py-16 md:py-24 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
       >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <motion.div className="order-2 md:order-1" variants={itemVariant}>
                   <h3 className={`font-serif text-3xl md:text-4xl font-bold ${yellowColor} mb-4`}>Expertise Meets Technology</h3>
                   <p className="text-lg text-neutral-300 leading-relaxed mb-4">
                      Our approach combines the deep market experience of our veteran team with sophisticated analytical tools and AI-driven insights. We meticulously analyze market trends, token fundamentals, and technological advancements.
                   </p>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                       This blend allows us to construct and manage portfolios designed to navigate market complexities and identify potential high-growth opportunities, always underpinned by rigorous risk assessment.
                   </p>
                </motion.div>
                 <motion.div className="order-1 md:order-2 relative aspect-video rounded-lg shadow-xl overflow-hidden" variants={itemVariant}>
                     <Image
                         src="/about-approach-visual.jpg" // Replace with relevant visual (e.g., abstract tech/data graphic)
                         alt="Data analysis visual"
                         layout="fill"
                         objectFit="cover"
                         quality={80}
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
                 </motion.div>
            </div>
          </div>
       </motion.section>

        {/* Optional: CTA Section */}
        <motion.section
          className="py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-4 sm:px-6">
              <h3 className="text-3xl font-semibold text-neutral-100 mb-6">Join the Club</h3>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/#portfolios" legacyBehavior>
                       <a className={`inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out shadow-lg hover:shadow-yellow-500/30`}>
                          Explore Our Portfolios
                       </a>
                   </Link>
               </motion.div>
          </div>
       </motion.section>

    </div>
  );
};

export default AboutPage;