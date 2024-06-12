import React from "react";
import LinkRoute from "../components/core/LinkRoute";
import ProgressPaws from "../components/core/ProgressPawHeader"

const LandingPage: React.FC = () => {
  return (
    <div>
      <ProgressPaws />
      <div className="flex justify-center items-center h-screen">
        <LinkRoute style="text-white text-lg p-4 rounded-lg bg-rose-500 hover:bg-rose-600 cursor-pointer" toRoute="/login" text="Get Started!" />
      </div>
    </div>
  );
};

export default LandingPage;