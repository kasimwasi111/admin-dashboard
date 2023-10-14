import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-10 pt-8 flex items-center justify-between">
      <div className="text-black ">
        <p className="text-lg">Hello Kasim 👋,</p>
      </div>
      <div className="relative">
        <FaSearch
          fontSize={16}
          className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search"
          className="text-sm focus:outline-none active:outline-none border w-[12rem] h-8 pl-8 pr-4 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
