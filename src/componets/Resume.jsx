import React from "react";

const skills = [
  {
    lang: [
      "IT Security",
      "Cybersecurity",
      "Contingency Planning",
      "Data Security",
      "Insider Risk",
      "SOC Architect",
      "Risk Management",
      "SecOps",
      "Ransomware Defense & Response",
      "GRC / ISMS Policy Development",
      "ISO 27001",
      "NIST CSF",
      "HIPAA / HITRUST",
      "SOC2",
      "ITIL",
      "COBIT / COSO",
      "Documentation and reporting",
    ],
    styl: [],
  },
];

const Resume = () => {
  return (
    <div className=" bg-black text-white py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <button className="bg-white border border-black text-[16px]  text-black font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300">
            <a
              href="NwosujosephChikaResumeGRC.pdf"
              download="NwosujosephChikaResumeGRC.pdf"
            >
              {" "}
              view resume
            </a>
          </button>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Core Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {/* Map through the skills array */}
            {skills.map((skill, index) => (
              <div key={index} className="w-full lg:w-1/2 xl:w-1/3">
                {/* Map through the 'lang' array inside the current skill */}
                {skill.lang.map((language, idx) => (
                  <button
                    key={idx}
                    className="bg-gray-700 hover:bg-blue-600 text-white mx-2 mb-4 px-4 py-2 text-[14px] rounded-md border-2 border-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    {language}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
      </div>
    </div>
  );
};

export default Resume;
