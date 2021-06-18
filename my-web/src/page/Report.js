import React from "react";
import Navbar from "../components/Navbar";

export default function Report() {
  return (
    <div className="">
      <Navbar />
      <div className="font-bold font-mono text-4xl text-center mt-10 text-gray-800">
        Report
      </div>
      <div className="relative sm:max-w-xl sm:mx-auto mt-7 shadow-2xl">
        <div className="bg-gray-100 rounded-lg font-mono ">
          <div className="h-3 bg-blue-400 rounded-t-md"></div>
          <form class="w-full max-w-lg ml-8">
            <div class="flex flex-wrap -mx-3 mb-6 ">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xm font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="SOMCHAI"/>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xm font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="DEE"/>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xm font-bold mb-2" >
                  E-MAIL
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="aa@aa.com"/>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xm font-bold mb-2" >
                  MOBILE NUMBER
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"   placeholder="088-8888888"/>
              </div>
              <div class="w-full md:w-1/1 md: px-3 mt-1 mb-4">
                <label class="block uppercase tracking-wide text-gray-700 text-xm font-bold mb-2" >
                  Why did you ask for leave ?
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
