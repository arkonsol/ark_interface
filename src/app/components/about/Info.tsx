"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiCpu, FiUsers, FiLink, FiMap } from 'react-icons/fi';
import HowItWorks from '../landing/HowItWorks';

// Shared styles
const sectionStyle = "bg-black  p-6 rounded-lg shadow-lg mb-8";
const headingStyle = "text-2xl text-teal-500 font-bold mb-4 flex items-center";
const iconStyle = "mr-2 text-teal-500";

// Shared animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const MissionStatement = () => (
  <motion.section
    className={`${sectionStyle} bg-white bg-opacity-10 backdrop-blur-lg rounded-xl`}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h2 className={headingStyle} variants={itemVariants}>
      <FiTarget className={iconStyle} /> Mission Statement
    </motion.h2>
    <motion.p variants={itemVariants}>
      Our mission is to prove that any type of organization can be governed onchain through Para Autonomous Organizations (PAOs) which eliminates the limitations of the current Decentralized Autonomous Organization (DAO) structure.
    </motion.p>
  </motion.section>
);

const CoreValues = () => (
  <motion.section
    className={`${sectionStyle} bg-white bg-opacity-10 backdrop-blur-lg rounded-xl`}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h2 className={headingStyle} variants={itemVariants}>
      <FiHeart className={iconStyle} /> Core Values
    </motion.h2>
    <motion.ul variants={itemVariants}>
      {['Unity', 'Creativity', 'Community-driven decisions', 'Inclusivity', 'Innovation'].map((value, index) => (
        <motion.li key={index} className="mb-2" whileHover={{ x: 10 }}>
          {value}
        </motion.li>
      ))}
    </motion.ul>
  </motion.section>
);

const Technology = () => (
  <motion.section
    className={`${sectionStyle} bg-white bg-opacity-10 backdrop-blur-lg rounded-xl`}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h2 className={headingStyle} variants={itemVariants}>
      <FiCpu className={iconStyle} /> Technology Behind the PAO
    </motion.h2>
    <motion.p variants={itemVariants}>
      Ark is built on the Solana blockchain, utilizing Anchor and Typescript.
    </motion.p>
  </motion.section>
);

const CommunityInvolvement = () => (
  <motion.section
    className={`${sectionStyle} flex items-center justify-center flex-col`}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h2 className={`${headingStyle} text-center`} variants={itemVariants}>
      <FiUsers className={iconStyle} /> Community Involvement
    </motion.h2>
    <motion.p variants={itemVariants}>
      Our community is at the heart of everything we do. Members can participate in governance, contribute to development, and shape the future of Ark through our decentralized decision-making processes.
    </motion.p>
  </motion.section>
);

const Partnerships = () => (
  <motion.section
    className={`${sectionStyle} flex items-center justify-center flex-col`}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h2 className={headingStyle} variants={itemVariants}>
      <FiLink className={iconStyle} /> Partnerships and Collaborations
    </motion.h2>
    <motion.ul variants={itemVariants}>
      {['Solana', 'Rust', 'Typescript'].map((partner, index) => (
        <motion.li key={index} className="mb-2" whileHover={{ x: 10 }}>
          {partner}
        </motion.li>
      ))}
    </motion.ul>
  </motion.section>
);

const Roadmap = () => (
  <motion.section
    className={`${sectionStyle} flex items-center justify-center flex-col`}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h2 className={headingStyle} variants={itemVariants}>
      <FiMap className={iconStyle} /> Future Roadmap
    </motion.h2>
    <motion.p variants={itemVariants}>
      We're working towards integrating more blockchain networks, enhancing governance tools, and building a robust ecosystem of decentralized organizations.
    </motion.p>
  </motion.section>
);

const InfoPage = () => (
  <div>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-6'>
      <MissionStatement />
      <CoreValues />
      <Technology />
    </div>
    <HowItWorks />
    <div className="w-full bg-gradient-to-br from-teal-900 to-black py-12 sm:py-20 px-4 text-center">
      <CommunityInvolvement />
      <Partnerships />
      <Roadmap />
    </div>
  </div>
);

export default InfoPage;
