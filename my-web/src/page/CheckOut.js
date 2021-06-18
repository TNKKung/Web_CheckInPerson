import React from "react";
import Navbar from "../components/Navbar";
import Clock from "../components/Clock";
import imgProfile from "./profile.jpg";
import { Link } from "react-router-dom";

export default function Index() {
  const data = {
    Pic: imgProfile,
    Id: "62010293",
    Name: "Nattawut Krongareetham",
    Age: "21",
    Department: "Full Stack Developer",
    Mobile_Number: "0640630406",
    Email: "tomkabtokom@gmail.com",
  };
  return (
    <div className="">
      <Navbar />
      <div className="relative sm:max-w-sm sm:mx-auto mt-7 shadow-2xl">
        <div className="bg-gray-200 rounded-lg font-mono">
          <div className="h-3 bg-blue-500 rounded-t-md "></div>
          <div className="ml-2 mr-2">Name : {data.Name}</div>
          <div className="ml-2 mr-2">Department : {data.Department}</div>
        </div>
      </div>
      <div className="mt-7 items-center flex flex-col">
        <img
          className="shadow-2xl rounded-2xl max-w-full h-auto align-middle border-none"
          src={data.Pic}
          width="250"
          alt="Pic"
        />
      </div>
      <div class="mt-1 flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
        <div class="mt-10 font-mono font-black text-9xl text-center ">
          <Clock />
        </div>
        <div action="" class="mt-5 flex flex-col lg:w-1/2 w-8/12">
          <Link
            to="/"
            class="bg-red-500 py-4 text-center px-17 md:px-1 md:py-4 text-white rounded leading-tight text-xl md:text-base font-mono mt-4 mb-20"
          >
            CHECK-OUT
          </Link>
        </div>
      </div>
    </div>
  );
}
