import React from "react";
import Navbar from "../components/Navbar";
import Clock from "../components/Clock";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 to-red-500">
      <Navbar />
      <div class="mt-10 flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
        <div class="mt-40 font-mono font-black text-9xl text-center ">
          <Clock />
        </div>
        <Link
          to="/login"
          className="bg-blue-500 py-40 px-4 text-center px-17 md:px-40 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-8 mb-20"
        >
            Login
        </Link>
      </div>
    </div>
  );
};

export default Index;
