import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const SupportButton = () => {
  return (
    <div>
      <div className="bg-slate-100 pl-8 py-4">
        <p className="flex item-center text-indigo-600">
          Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
        </p>
      </div>
    </div>
  );
};

export default SupportButton;
