import React from "react";
/* Import icons in outline */
import { PhoneIcon } from "@heroicons/react/outline";
/* Import icons in solid */
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import SupportCard from "./SupportCard";

import "../assets/Styles/main.css";

/* Import image */
import supportImg from "../assets/support.jpg";
import SupportText from "./SupportText";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p py-4 text-3xl text-slate-300>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="phone-Icon" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <SupportText />
            </div>
            <SupportCard />
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="phone-Icon" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <SupportText />
            </div>
            <SupportCard />
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="phone-Icon" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <SupportText />
            </div>
            <SupportCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
