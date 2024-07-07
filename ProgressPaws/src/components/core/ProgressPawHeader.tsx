import React from "react";
import ProgressPawCat from "../../assets/topcat.png"

const ProgressPawHeader: React.FC = () => {
  return (
    <div className="flex items-center m-auto pt-4 justify-center w-100% max-w-screen-lg">
      <img src={ProgressPawCat} alt="ProgressPaws" className="w-100% max-w-20 mr-10 "></img>
      <h1 className="text-4xl lg:text-7xl font-bold">Progress Paws</h1>
    </div>
  )
}

export default ProgressPawHeader;