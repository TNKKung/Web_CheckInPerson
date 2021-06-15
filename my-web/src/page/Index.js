import React from "react";
import Navbar from "../components/Navbar";
import Clock from "../components/Clock";

import { Link } from "react-router-dom";

export default function Index() {
  
  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-red-500">
      <Navbar />
      <div class="mt-40 flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
        <div class="mt-10 font-mono font-black text-9xl text-center ">
          <Clock />
        </div>
        <div action="" class="mt-5 flex flex-col lg:w-1/2 w-8/12">
          <Link
            to="/checkin"
            class="bg-green-500 py-4 text-center px-17 md:px-1 md:py-4 text-white rounded leading-tight text-xl md:text-base font-mono mt-4 mb-20"
          >
            CHECK-IN
          </Link>
        </div>
      </div>
    </div>
  );
}
