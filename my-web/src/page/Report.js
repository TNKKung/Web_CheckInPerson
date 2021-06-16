import React from "react";
import Navbar from "../components/Navbar";

export default function Report() {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-red-500">
      <Navbar />
      <div className="font-bold font-mono text-4xl text-center mt-10 text-gray-800">
        Report
      </div>
      <div className="relative sm:max-w-xl sm:mx-auto mt-7 shadow-2xl">
        <div className="bg-gray-100 rounded-lg font-mono ">
          <div className="h-3 bg-blue-400 rounded-t-md"></div>
          
        </div>
      </div>
    </div>
  );
}
