import React, { useState } from "react";
import avatar from "../assets/images/avatar.jpg";
import { userData } from "../assets/data/userData";

const SidebarDefault = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed">
      <div className="hidden flex-col md:flex-row md:space-x-6 h-screen xl:flex">
        <div className="w-full md:w-fit rounded-2xl h-full bg-white">
          <div className="flex items-center p-4 justify-center md:justify-start">
            <img
              src={avatar}
              className="h-24 w-24 rounded-full"
              alt="Avatar Pic"
            />
            <div className="text-left ml-4">
              <p className="font-bold text-xl md:text-2xl">{userData.name}</p>
              <p className="text-gray-500 text-sm md:text-base">
                {userData.lastUpdated}
              </p>
            </div>
          </div>
          <div className="border-2 border-l-0 border-r-0">
            <div className="p-4">
              <div className="border-4 border-gray-700 border-t-0 border-r-0 border-b-0 px-2">
                <div className="flex items-center space-x-2">
                  <p>🇮🇳</p>
                  <p className="font-bold text-gray-500">{userData.country}</p>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <p>🎓</p>
                  <p className="font-bold text-gray-500">
                    {userData.university}
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <p>📝</p>
                  <p className="font-bold text-gray-500">{userData.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-l-0 border-r-0 border-t-0">
            <div className="p-4 text-left">
              <button className="focus:bg-blue-100 w-full p-2 rounded-xl">
                <p className="font-bold text-xl md:text-2xl text-left">
                  Overall Status
                </p>
              </button>
            </div>
          </div>
          <div className="pb-1">
            {!show ? (
              <div className="p-4 text-left">
                <button
                  className="w-full active:bg-gray-300 rounded-xl py-2 px-3"
                  onClick={() => setShow(true)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-xl md:text-2xl text-left">
                      Overall Stats
                    </p>
                    <p className="text-xl md:text-2xl font-bold">⤦</p>
                  </div>
                </button>
              </div>
            ) : (
              <div className="m-4 text-left rounded-xl bg-blue-100">
                <button
                  className="w-full py-2 px-3"
                  onClick={() => setShow(false)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-xl md:text-2xl text-left">
                      Chapter Wise Stats
                    </p>
                    <p className="text-xl md:text-2xl font-bold">X</p>
                  </div>
                </button>
                <div className="px-4 py-2">
                  <div className="border-4 border-gray-700 border-t-0 border-r-0 border-b-0">
                    <p className="font-bold px-2">Chapter 1</p>
                    <p className="font-bold px-2">Chapter 2</p>
                    <p className="font-bold px-2">Chapter 3</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDefault;