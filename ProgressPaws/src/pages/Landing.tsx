import React from "react";
import LinkRoute from "../components/core/LinkRoute";
import ProgressPaws from "../components/core/ProgressPawHeader"

const LandingPage: React.FC = () => {
  return (
    <div>
      <ProgressPaws />
      <div className="flex justify-center items-center" style={{height: "75vh"}}>
        <div className="flex flex-col justify-center items-center mx-6">
          <div className="text-center items-center">
            <p className="text-4xl font-extrabold tracking-tighter">
              Every day, it gets a little easier.
            </p>
            <p className="font-extrabold tracking-tighter">
              But you gotta do it every day, that's the hard part
            </p>
          </div>
          <div className="mt-10">
            <LinkRoute style="text-white text-lg font-semibold p-4 rounded-lg bg-rose-500 transition ease-in delay-100 hover:bg-rose-600 cursor-pointer" toRoute="/login" text="Get Started!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;