import React from "react";
const faqQuestions = [
  {
    question: "What is Ark?",
    answer:
      "Ark is a platform that helps individuals and communities create and manage Public Autonomous Organizations (PAOs) on the blockchain.",
  },
  {
    question: "What is a Public Autonomous Organization (PAO)?",
    answer:
      "A Public Autonomous Organization (PAO) is a decentralized entity governed by code and community consensus. It operates transparently on the blockchain, allowing for open and autonomous management of shared resources and projects.",
  },
  {
    question: "How does Ark help in creating a PAO?",
    answer:
      "Ark provides easy-to-use tools and templates that simplify the creation, deployment, and management of PAOs. It integrates with multiple blockchain networks, allowing you to choose the best platform for your organization's needs.",
  },
  {
    question: "Which blockchains does Ark support?",
    answer:
      "Ark currently supports Solana, BNB Chain, Ethereum, Polygon, and more. You can deploy PAOs on these blockchains, and we are constantly adding support for additional networks.",
  },
  {
    question: "Do I need coding skills to use Ark?",
    answer:
      "No, Ark is designed to be user-friendly and accessible to people with no coding experience. However, for more advanced customization, coding knowledge can be helpful.",
  },
  {
    question: "Is Ark free to use?",
    answer:
      "Ark offers a free tier with basic features. For advanced functionalities, such as integrating with multiple blockchains or accessing premium templates, there are paid plans available.",
  },
  {
    question: "Can I integrate existing PAOs into Ark?",
    answer:
      "Yes, you can import existing PAOs into Ark. Our platform provides tools to seamlessly manage them and make governance more efficient.",
  },
  {
    question: "How is Ark different from other DAO platforms?",
    answer:
      "Ark is focused on creating Public Autonomous Organizations (PAOs), which are designed for open governance and public participation. Unlike traditional DAOs, PAOs prioritize transparency and inclusivity for both community members and external participants.",
  },
  {
    question: "What security measures are in place to protect my PAO?",
    answer:
      "Ark ensures that your PAO is secure through smart contract audits, multi-signature wallets, and continuous monitoring of blockchain activity. Security is a top priority to prevent unauthorized access and maintain trust.",
  },
  {
    question: "How can I get started with Ark?",
    answer:
      "Getting started with Ark is simple. Sign up on our website, follow the guided steps to create your PAO, and deploy it on the blockchain of your choice. Our documentation and support team are available to assist you along the way.",
  },
];

function Faq() {
  return (
    <div className="w-full p-5 bg-gradient-to-br from-cteal via-black to-clightTeal min-h-[10rem] flex flex-col items-center justify-center gap-3">
      <h2 className="text-3xl sm:text-4xl font-bold text-teal-200 text-center mb-3 sm:mb-4">
        Frequently Asked Questions
      </h2>
      <span className="text-base sm:text-xl text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
        Here are some frequently asked questions.
      </span>

      <div className="flex flex-col gap-3 w-[80%]">
        {faqQuestions.map((item, index) => {
          return (
            <div
              className="collapse collapse-arrow bg-white bg-opacity-10 backdrop-blur-lg"
              key={index}
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
