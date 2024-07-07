import React from "react";
import ProgressPawsHeader from "../components/core/ProgressPawHeader"
import LinkRoute from "../components/core/LinkRoute";

const Register: React.FC = () => {
  return (
    <div>

        <ProgressPawsHeader />

      <div className="flex justify-center items-center" style={{height: "75vh"}}>
        <div className="w-full max-w-md m-auto ">
          <form className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mx-5">
            <div className="flex flex-col">
              <div className="text-center items-center mb-6">
                <h1 className="text-3xl tracking-tight font-semibold">Start your habit journey!</h1>
              </div>
              <div>
                <div className="flex flex-col">
                  <label className="font-extrabold tracking-tighter">
                    Username
                  </label>
                  <input type="text" placeholder="Email address" className="my-1 p-1 bg-slate-200 border-solid border-2 border-slate-300 rounded"></input>
                </div>
                <div className="flex flex-col mt-2">
                  <label className="font-extrabold tracking-tighter">
                    Email address
                  </label>
                  <input type="text" placeholder="Email address" className="my-1 p-1 bg-slate-200 border-solid border-2 border-slate-300 rounded"></input>
                </div>
                <div className="flex flex-col mt-2">
                  <label className="font-extrabold tracking-tighter">
                    Password
                  </label>
                  <input type="password" placeholder="Password" className="my-1 p-1 bg-slate-200 border-solid border-2 border-slate-300 rounded"></input>
                </div>
              </div>
              <div className="text-center">
                <button className="w-full font-semibold p-2 bg-slate-200 my-5 rounded transition ease-in delay-100 hover:bg-slate-300">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;