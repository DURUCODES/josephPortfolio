import React from "react";

const skills = [
  {
    lang: [
      "High attention to detail and analytical skills",
      "Regulatory Compliance",
      "Data Privacy & Protection",
      "Enterprise Risk Management",
      "Compliance Auditing",
      "High attention to detail and organizational skills",
    ],
    styl: [],
  },
];

const Resume = () => {
  return (
    <div className=" space-y-4">
      <div>
        <button className="bg-green-400 p-2">Download</button>
      </div>
      {/* Map through the skills array */}
      {skills.map((skill, index) => (
        <div key={index} className="">
          {/* Map through the 'lang' array inside the current skill */}
          {skill.lang.map((language, idx) => (
            <button
              key={idx}
              className="text-white mx-1 md:mr-4 mb-4 hover:bg-gray-600 px-3 py-2 text-[14px] rounded-md border"
            >
              {language}
            </button>
          ))}
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default Resume;
