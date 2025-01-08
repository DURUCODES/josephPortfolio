import React from "react";

const experienceData = [
  {
    title: "Compliance Analyst",
    company: "LGC Group – Vaughan",
    date: "Aug 2024 to Present",
    description: [
      "Coordinated the review and update of Global Compliance documents, managing the review and feedback process to ensure accuracy and completeness.",
      "Led the annual refresh of the legal, Regulatory Compliance (including Financial Crime) Risk Appetite statement, ensuring alignment with current regulatory standards.",
      "Prepared monthly, quarterly, semi-annual, and annual risk management reports, providing detailed insights into the organization’s compliance risk profile.",
      "Supported senior management and board reporting, utilizing the Board & Committee Reporting tool to streamline report preparation and distribution.",
      "Developed subject matter expertise in governing regulations, best industry practices, and internal compliance protocols.",
      "Reviewed existing Global Compliance reporting processes and recommended areas for improvement to enhance efficiency and effectiveness.",
      "Assisted in strategic initiatives and special projects, contributing to the organization’s overall compliance and governance objectives.",
    ],
    tools: [
      "Regulatory Compliance",
      "Board & Committee Reporting",
      "Risk Management Reporting",
      "Financial Crime Risk",
      "Governance",
    ],
  },
  {
    title: "Risk Analyst",
    company: "Summer Fresh Salads – Vaughan",
    date: "Nov 2023 – May 2024",
    description: [
      "Engineered an innovative credit risk model that improved loan approval accuracy by 25%, directly impacting the bottom line through reduced defaults.",
      "Deployed a risk-based pricing strategy for new product lines, contributing to a 15% increase in market share by attracting high-quality customers.",
      "Revamped risk reporting mechanisms, enhancing clarity and decision-making efficiency for the executive team, leading to a strategic shift that avoided a $10M exposure.",
      "Collaborated on the development of a proprietary risk assessment tool, increasing operational efficiency and reducing manual error rates by 40%.",
    ],
    tools: [
      "Risk Model Development",
      "Risk-Based Pricing",
      "Risk Reporting",
      "Proprietary Risk Assessment Tool",
      "Data Analysis",
    ],
  },
];

const Projects = () => {
  return (
    <div className="my-4">
      <div className="md:grid md:grid-cols-2 gap-4 flex flex-col">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] p-2 rounded-lg shadow"
          >
            {/* Job Title & Company */}
            <div className="flex justify-between items-center">
              <h3 className="text-white text-[25px] my-2">
                {experience.title}
              </h3>
              <h3 className="text-yellow-400 text-sm">
                Date: {experience.date}
              </h3>
            </div>

            {/* Company and Responsibilities */}
            <div className="my-2">
              <p className="text-xs">
                <strong>{experience.company}</strong>
              </p>
              {experience.description.map((desc, idx) => (
                <p key={idx} className="text-xs">
                  - {desc}
                </p>
              ))}
            </div>

            {/* Displaying the tools as buttons */}
            {experience.tools && experience.tools.length > 0 && (
              <div className="my-2">
                {experience.tools.map((tool, idx) => (
                  <button
                    key={idx}
                    className="border text-white py-1 px-3 rounded-md text-xs mr-2 mt-2 hover:bg-gray-600"
                  >
                    {tool}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
