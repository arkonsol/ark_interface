"use client"
import React from "react";
const faqQuestions = [
  {
    question: "What is Ark?",
    answer:
      "Ark is a platform that helps individuals and communities create and manage Public Autonomous Organizations (PAOs) on the blockchain.",
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
    question: "How is Ark different from other DAO platforms?",
    answer:
      "Ark is focused on creating Para Autonomous Organizations (PAOs), which are designed for open governance and public participation. Unlike traditional DAOs, PAOs prioritize transparency and inclusivity for both community members and external participants.",
  },
];

function Faq() {
  return (
    <div className="w-full px-5 py-8 bg-gradient-to-br from-teal-500 via-black to-teal-800 min-h-[10rem] flex flex-col items-center justify-center gap-3">
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
