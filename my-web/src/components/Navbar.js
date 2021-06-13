import React from "react";
import { Link } from "react-router-dom";
import iconClock from "./clock.svg";
import user from "./user.svg";
function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="hover:bg-gray-700 rounded-md px-3 py-2"
                >
                  <img className="h-12 w-12" src={iconClock} alt="Img" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-9 flex items-baseline space-x-4">
                  <Link
                    to="/checkIn"
                    className=" hover:bg-gray-700 text-white px-3 py-2 text-xm rounded-md font-mono"
                  >
                    CHECK-IN
                  </Link>
                  <Link
                    to="/checkOut"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-xm font-mono"
                  >
                    CHECK-OUT
                  </Link>
                  <Link
                    to="/listTime"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-xm font-mono"
                  >
                    LIST-TIME
                  </Link>
                  <Link
                    to="/listTime"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-xm font-mono"
                  >
                    REPORT
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/profile"
                className="hover:bg-gray-700 rounded-md px-3 py-2"
              >
                <img className="h-10 w-12" src={user} alt="Img" />
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/check-in"
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-roboto font-mono"
            >
              CHECK-IN
            </Link>
            <Link
              to="/check-out"
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-toboto font-mono"
            >
              CHECK-OUT
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
