import React from 'react';
import { FiClipboard, FiSettings, FileText, Send, Activity, RefreshCw } from 'react-icons/fi';

const steps = [
  {
    step: 1,
    text: "Begin by filling out the necessary details about your Public Autonomous Organization. This includes its name, mission, and core values.",
    image: "path/to/your/image1.jpg",
    icon: FiClipboard,
    reverse: false
  },
  {
    step: 2,
    text: "Customize the governance model for your PAO by choosing from various templates or creating your own. Define roles, voting mechanisms, and decision-making processes.",
    image: "path/to/your/image2.jpg",
    icon: FiSettings,
    reverse: true
  },
  {
    step: 3,
    text: "Integrate smart contracts that automate key functions of your PAO, such as voting, fund management, and member interactions.",
    image: "path/to/your/image3.jpg",
    icon: FileText,
    reverse: false
  },
  {
    step: 4,
    text: "Invite members to join your PAO by sending them invitations via email or unique links. Members can then register and become part of your organization.",
    image: "path/to/your/image4.jpg",
    icon: Send,
    reverse: true
  },
  {
    step: 5,
    text: "Use the dashboard to manage and monitor your PAO's activities. Track performance, review governance decisions, and ensure everything runs smoothly.",
    image: "path/to/your/image5.jpg",
    icon: Activity,
    reverse: false
  },
  {
    step: 6,
    text: "Gather feedback from your members and make improvements to your PAO as needed. Adjust governance models, update smart contracts, and refine processes.",
    image: "path/to/your/image6.jpg",
    icon: RefreshCw,
    reverse: true
  }
];

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-br from-cteal to-black w-full">
      <div className="container mx-auto p-6">
        {steps.map((step, index) => (
          <div key={index} className={`flex ${step.reverse ? 'flex-row-reverse' : 'flex-row'} items-center mb-6`}>
            <div className="mr-4">
              <step.icon size={48} className="text-white"/>
            </div>
            <div className="w-1/2 p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-md flex items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Step {step.step}</h2>
                <p className="text-gray-200">{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
