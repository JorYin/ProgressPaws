import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
          <Link className="text-white text-lg p-4 rounded-lg bg-rose-500 hover:bg-rose-600 cursor-pointer" to="/supbaseTest">Go to Supabase Test</Link> 
      </div>
    </div>
  );
}

export default LandingPage;