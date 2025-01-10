import React from "react";

const experienceData = [
  {
    title: "Third-Party Risk Analyst",
    company: "LGC Group – Vaughan",
    date: "Aug 2024 to Present",
    description: [
      "Applied third-party risk management best practices throughout the lifecycle of vendor relationships, ensuring compliance with industry frameworks, policies, and standards.",
      "Led third-party due diligence efforts, ensuring vendors adhered to security protocols and collaborated with internal stakeholders to mitigate risks.",
      "Participated in vendor evaluations and meetings, contributing to the selection process and supporting informed decision-making to minimize risks.",
      "Directed the implementation of encryption protocols for data in transit and at rest, achieving 100% compliance with global data protection regulations.",
      "Handled vendor escalations, identifying issues early, and tracking trends to mitigate risks as per Third-Party Risk Management (TPRM) guidelines.",
      "Issued, tracked, and logged non-conformance reports and Change Order requests, maintaining compliance and operational efficiency across vendor relationships.",
      "Contributed to the development and implementation of SLAs, SLOs, and KPIs, aligning them with business objectives to improve service delivery and mitigate risks.",
    ],
    tools: [
      "Third-Party Risk Management (TPRM)",
      "Vendor Risk Assessments",
      "Data Encryption Protocols",
      "Risk Mitigation Strategies",
      "SLA, SLO, KPI Development",
      "Compliance Standards",
    ],
  },
  {
    title: "Compliance Analyst",
    company: "LGC Group – Vaughan",
    date: "Nov 2023 to May 2024",
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
    date: "Jul 2019 – june 2023",
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
              <h3 className="text-yellow-400 text-sm"></h3>
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
