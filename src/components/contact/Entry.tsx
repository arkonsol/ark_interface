
"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMessageSquare,
  FiGithub,
  FiHelpCircle,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-900 text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContactSection
          title="General Contact Information"
          icon={<FiMail className="text-3xl" />}
          content="For general questions or support, email us at arkonsol0@gmail.com or fill out the form below."
        >
          <ContactForm />
        </ContactSection>

        <ContactSection
          title="Community Communication Channels"
          icon={<FiMessageSquare className="text-3xl" />}
          content="Join our community discussions, stay updated on governance proposals, or contribute to development."
        >
          <CommunityLinks />
        </ContactSection>

        <ContactSection
          title="Support and Help"
          icon={<FiHelpCircle className="text-3xl" />}
          content="Visit our Help Center for detailed guides and troubleshooting, or check our FAQ for quick answers."
        >
          <a href="#" className="text-teal-200 hover:text-white">Help Center</a>
          <a href="#" className="text-teal-200 hover:text-white ml-4">FAQ</a>
        </ContactSection>

        <ContactSection
          title="Social Media Links"
          icon={<FiTwitter className="text-3xl" />}
          content="Follow us on social media for the latest updates and news."
        >
          <SocialMediaLinks />
        </ContactSection>

        <ContactSection
          title="Partnership and Collaboration Inquiries"
          icon={<FiGithub className="text-3xl" />}
          content="Interested in collaborating with us? Reach out at partnerships@thearkonsol.xyz."
        />
      </motion.div>
    </motion.div>
  );
};

type ContactSectionProps = {
  title: string;
  icon: ReactNode;
  content: string;
  children?: ReactNode;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  icon,
  content,
  children,
}) => (
  <motion.div
    className="bg-black bg-opacity-30 p-6 rounded-lg"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-2xl font-semibold ml-2">{title}</h2>
    </div>
    <p className="mb-4">{content}</p>
    {children}
  </motion.div>
);

const ContactForm: React.FC = () => (
  <form className="space-y-4">
    <input
      type="email"
      placeholder="Your email"
      className="w-full p-2 bg-transparent border border-teal-300 rounded"
    />
    <textarea
      placeholder="Your message"
      rows={4}
      className="w-full p-2 bg-transparent border border-teal-300 rounded"
    ></textarea>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-teal-500 text-white px-4 py-2 rounded"
    >
      Send Message
    </motion.button>
  </form>
);

const CommunityLinks: React.FC = () => (
  <div className="flex space-x-4 text-sm">
    <a href="#" className="text-teal-200 hover:text-white">
      Discord
    </a>
    <a href="#" className="text-teal-200 hover:text-white">
      Telegram
    </a>
    <a href="#" className="text-teal-200 hover:text-white">
      GitHub
    </a>
    <a href="#" className="text-teal-200 hover:text-white">
      Governance Forum
    </a>
  </div>
);

const SocialMediaLinks: React.FC = () => (
  <div className="flex space-x-4">
    <a href="https://x.com/ark_onsol" target="_blank" className="text-teal-200 hover:text-white">
      <FiTwitter />
    </a>
    <a href="#" className="text-teal-200 hover:text-white">
      <FiLinkedin />
    </a>
  </div>
);

export default ContactPage;
