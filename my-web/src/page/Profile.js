import React from "react";
import Navbar from "../components/Navbar";
import imgProfile from "./profile.jpg";
import { Link } from "react-router-dom";

export default function Profile() {
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
      <div className="mt-7 items-center flex flex-col">
        <img
          className="shadow-2xl rounded-2xl max-w-full h-auto align-middle border-none"
          src={data.Pic}
          width="250"
          alt="Pic"
        />
      </div>
      <div className="relative sm:max-w-xl sm:mx-auto mt-7 shadow-2xl">
        <div className="bg-gray-200 rounded-lg font-mono">
          <div className="h-3 bg-blue-400 rounded-t-md"></div>
          <div className="text-gray-500 mt-2 ml-7">
            Id : {data.Id}
          </div>
          <div className="text-gray-500 mt-2 ml-7">
            Name : {data.Name}
          </div>
          <div className="text-gray-500 mt-2 ml-7">
            Age : {data.Age}
          </div>
          <div className="text-gray-500 mt-2 ml-7">
            Email : {data.Email}
          </div>
          <div className="text-gray-500 mt-2 ml-7">
            Mobile-Number : {data.Mobile_Number}
          </div>
          <div className="text-gray-500 mt-2 ml-7">
            Department : {data.Department}
          </div>
        </div>
      </div>
      <div class="mt-2 flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
        <div class="flex flex-col lg:w-1/2 w-8/12 mt-7">
          <Link
            to="/login"
            class="bg-red-500 py-4 text-center px-17 md:px-1 md:py-4 text-white rounded leading-tight text-xl md:text-base font-mono mb-20 shadow-2xl"
          >
            SIGN-OUT
          </Link>
        </div>
      </div>
    </div>
  );
}
