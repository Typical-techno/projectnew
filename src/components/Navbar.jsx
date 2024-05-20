import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        className="flex text-start py-6 bg-[#DFD6D6] fixed w-full"
        style={{ zIndex: 100 }}
      >
        <div className="border border-black flex w-full bg-white justify-between items-center">
          <p className="font-bold italic text-3xl py-2 px-4 ">Assignment</p>
          <button
            className="flex xl:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <p className="px-8">☰</p>
          </button>
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
