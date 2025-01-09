import React, { useState } from "react";
import mypic from "../assets/image/chika.jpeg";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcPhone } from "react-icons/fc";
const ProfileComponet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleInfo = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  return (
    <div
      className="border rounded-xl  md:w-[250px]  flex flex-col p-2 md:items-center shadow"
      style={{ backgroundColor: "#0D1117" }}
    >
      <div className="flex flex-row md:flex-col md:items-start items-center justify-between  ">
        <div className="flex  group-aria-selected:space-x-8 md:flex-col">
          <div className=" h-24 md:h-40  mr-4 rounded-xl ">
            <img
              src={mypic}
              className=" h-24 md:h-40 w-[150px] md:w-full rounded-full object-cover "
            />
          </div>
          <div className="py-2 w-full">
            <h1 className="text-xl font-bold my-2 text-white">
              Joseph Chika Nwosu
            </h1>
            <span className=" w-ful py-1 text-white p-2 text-[10px] shadow-xl rounded  bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)]">
              Governance, Risk and Compliance expert
            </span>
          </div>
        </div>

        <div className="flex md:hidden bg-yellow-400" onClick={toggleInfo}>
          <span>
            <IoMdArrowDropdown />
          </span>
        </div>
      </div>
      <div className={` md:flex md:flex-col ${isOpen ? "" : "hidden"}`}>
        {/* <div className=""> */}
        <hr className=" w-full border-gray-500 my-4" />
        <div>
          <div className="flex items-center">
            <span
              className=" p-1  rounded mr-2"
              style={{ backgroundColor: "#202022", color: "#fbbf24" }}
            >
              <CiMail className="text-2xl" />
            </span>
            <div>
              <p className="text-gray-500 font-semibold text-sm">Email</p>
              <a
                className="text-xs cursor-pointer text-white"
                href="mailto: kingsleychiduruchukwu@gmail.com?subject=Inquiry&body=Hello, ..."
              >
                nwosujoseph8@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center my-4">
            <span
              className=" p-1  rounded mr-2"
              style={{ backgroundColor: "#202022", color: "#fbbf24" }}
            >
              <FcPhone className="text-2xl" />
            </span>
            <div>
              <p className="text-gray-500 font-semibold text-sm">Phone</p>
              <span className="text-xs cursor-pointer text-white">
                +(1) 647 674 3745
              </span>
            </div>
          </div>

          <div className="flex items-center my-4">
            <span
              className=" p-1  rounded mr-2"
              style={{ backgroundColor: "#202022", color: "#fbbf24" }}
            >
              <MdLocationPin className="text-2xl" />
            </span>
            <div>
              <p className="text-gray-500 font-semibold text-sm">address</p>
              <a className="text-xs cursor-pointer text-white">
                Brampton, Ontario, Canada
              </a>
            </div>
          </div>

          <div className="flex items-center my-4">
            <a
              href="https://www.linkedin.com/in/nwosu-joseph-chika-006340301/"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-1  rounded mr-2"
              style={{ backgroundColor: "#202022", color: "#fbbf24" }}
            >
              <CiLinkedin className="text-2xl" />
            </a>
            <div>
              <p className="text-gray-500 font-semibold text-sm">linkedin</p>
              <a
                className="text-xs cursor-pointer text-white"
                href="https://www.linkedin.com/in/nwosu-joseph-chika-006340301/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nwosu Joseph Chika
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponet;
