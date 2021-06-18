import React from "react";
import Navbar from "../components/Navbar";

export default function ListTime() {
  const data = {
      name : "nattawut",
      listTime : [
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
        {
            name: "Nattawut Krongareetham",
            Department: "Full Stack Developer",
            CheckIn: "08:56:43",
            CheckOut: "17:00:32",
            date: "16/02/64",
        },
    
      ]
  }
  return (
    <div classNameName="">
      <Navbar />
      <table className="min-w-full table-auto">
        <thead className="justify-between ">
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-300">Date</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Department</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Check-in</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Check-out</span>
            </th>
            <th className="px-16 py-2">
              <span className="" />
            </th>
          </tr>
        </thead>
        {data.listTime.map((item) => {
          return (
            <tbody className="">
              <tr className="bg-white border-4 border-purple-500 rounded-lg text-center">
                <td className="ml-2 font-semibold">{item.date}</td>
                <td>
                  <span className="text-center ml-2 font-semibold">
                    {item.name}
                  </span>
                </td>
                <td className="px-16 py-2">
                  <span className="">{item.Department}</span>
                </td>
                <td className="px-16 py-2">
                  <span>{item.CheckIn}</span>
                </td>
                <td className="px-16 py-2 ">
                  <span>{item.CheckOut}</span>
                </td>
                <td className="px-16 py-2">
                  <span>{item.Status}</span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
