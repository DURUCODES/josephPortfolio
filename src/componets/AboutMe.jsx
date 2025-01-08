import React from "react";
import { SiWebauthn } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const AboutMe = () => {
  return (
    <div className="">
      <div>
        <p className="mb-4 text">
          <strong>Seasoned Risk Management Leader</strong> with over 5 years of
          experience driving comprehensive risk strategies as a Risk Analyst and
          Risk Specialist. Demonstrated ability to reduce risk exposure and
          optimize operational efficiency, delivering tangible results that
          align with organizational goals.
        </p>

        <p className="mb-4 text">
          Expertise in{" "}
          <strong>
            market analysis, compliance audits, and strategic risk planning
          </strong>
          . Known for leading cross-functional teams and fostering a proactive
          risk culture. Adept at translating complex risk data into actionable
          insights that drive profitability, productivity, and long-term
          success.
        </p>

        <p className="mb-4 text">
          Successfully <strong>implemented risk mitigation strategies</strong>{" "}
          that resulted in a <strong>15% increase in profitability</strong> and
          a <strong>20% reduction in risk exposure</strong> within just two
          years. Spearheaded streamlined processes that boosted{" "}
          <strong>productivity by 25%</strong> and cut{" "}
          <strong>administrative backlog by 30%</strong>, empowering senior
          management to make faster, data-driven decisions.
        </p>

        <p className="mb-4 text">
          Passionate about leveraging my expertise to not only manage risk but
          to turn it into a competitive advantage, ensuring organizations remain
          resilient, compliant, and poised for growth.
        </p>
      </div>

      <div>
        <h1 className="text-3xl font-bold">My Process</h1>
        <div className="flex flex-col md:grid md:grid-cols-2 relative">
          <div class="md:mr-4 my-4 border-2 border-[rgba(216,209,225,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
            <div className="md:py-6 py-3 flex flex-col md:flex-row md:items-start items-center text-center md:text-start">
              <div className="md:mr-3">
                <i className="text-5xl mr-2 text-yellow-300 fa fa-cogs"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">RSA Archer</h2>
                <p>
                  I leverage RSA Archer to automate and streamline risk
                  management processes. This includes conducting risk
                  assessments, managing incidents, and ensuring compliance
                  through integrated workflows.
                </p>
              </div>
            </div>
          </div>

          <div class="relative md:mr-4 my-4 border-2 border-[rgba(216,209,225,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
            <div className="md:py-6 py-3 flex flex-col md:flex-row md:items-start items-center text-center md:text-start">
              <div className="md:mr-3">
                <i className="text-5xl mr-2 text-yellow-300 fa fa-cloud"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">ServiceNow</h2>
                <p>
                  I utilize ServiceNow to manage IT service management (ITSM)
                  processes, enabling seamless incident management, change
                  control, and risk mitigation across the organization.
                  ServiceNow’s capabilities help enhance collaboration and
                  visibility into operational risks.
                </p>
              </div>
            </div>
          </div>

          <div class="relative md:mr-4 my-4 border-2 border-[rgba(216,209,225,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
            <div className="md:py-6 py-3 flex flex-col md:flex-row md:items-start items-center text-center md:text-start">
              <div className="md:mr-3">
                <i className="text-5xl mr-2 text-yellow-300 fa fa-users"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Venminder</h2>
                <p>
                  With Venminder, I streamline third-party risk management by
                  assessing vendor risks, tracking performance, and ensuring
                  compliance. The platform’s centralized repository simplifies
                  vendor evaluations and ensures that potential risks are
                  proactively addressed.
                </p>
              </div>
            </div>
          </div>

          <div class="relative md:mr-4 my-4 border-2 border-[rgba(216,209,225,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
            <div className="md:py-6 py-3 flex flex-col md:flex-row md:items-start items-center text-center md:text-start">
              <div className="md:mr-3">
                <i className="text-5xl mr-2 text-yellow-300 fa fa-shield-alt"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  CSET (Cybersecurity Evaluation Tool)
                </h2>
                <p>
                  I use CSET to perform thorough cybersecurity assessments,
                  identifying vulnerabilities, gaps in security controls, and
                  areas for improvement. CSET enables me to develop action plans
                  to bolster cybersecurity defenses and ensure compliance with
                  regulatory standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
