import React from "react";
import Image from "./profile.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div class="h-screen bg-gradient-to-r from-purple-400 to-red-500 flex ">
      <div class="mt-10 flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
        <img src={Image} width="200" alt="img" class="mb-5" />
        <form action="" class="mt-7 flex flex-col lg:w-1/2 w-8/12">
          <div class="flex flex-wrap w-full relative h-15 bg-white rounded mb-6 pr-10">
            <div class="flex -mr-px justify-center w-15 p-4">
              <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                <i class="fas fa-user-circle"></i>
              </span>
            </div>
            <input
              type="text"
              class="flex-shrink flex-grow leading-normal w-px border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
              placeholder="Username"
            />
          </div>
          <div class="flex flex-wrap w-full relative h-15 bg-white rounded mb-4">
            <div class="flex -mr-px justify-center w-15 p-4">
              <span class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                <i class="fas fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              class="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
              placeholder="Password"
            />
            <div class="flex -mr-px">
              <span class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                <i class="fas fa-eye-slash"></i>
              </span>
            </div>
          </div>
          <Link
            to="/"
            class="text-base text-white text-right font-roboto leading-normal hover:underline"
          >
            Forget Password ?
          </Link>
          <Link
            to="/home"
            class="bg-blue-500 py-4 text-center px-17 md:px-1 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
