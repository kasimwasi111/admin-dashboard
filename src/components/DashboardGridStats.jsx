import React from "react";
import {
  AiOutlineDollar,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { LuWallet } from "react-icons/lu";
import { BsBagCheck } from "react-icons/bs";

const DashboardGridStats = () => {
  return (
    <div className="flex gap-4 px-10 py-8 w-full">
      <BoxWrapper>
        <div className="rounded-full h-20 w-20 flex items-center justify-center bg-teal-200">
          <AiOutlineDollar className="text-4xl text-teal-800" />
        </div>
        <div className="pl-2 flex flex-col">
          <span className="text-sm text-gray-500 font-light">Earning</span>
          <div className="flex flex-col">
            <strong className="text-xl text-gray-700 font-semibold">
              $198k
            </strong>
            <span className="text-sm text-green-600 flex flex-row">
              <span>
                <AiOutlineArrowUp />
              </span>{" "}
              37.9% <span className="text-black">this month</span>
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-20 w-20 flex items-center justify-center bg-fuchsia-200">
          <CgNotes className="text-4xl text-fuchsia-800" />
        </div>
        <div className="pl-2 flex flex-col">
          <span className="text-sm text-gray-500 font-light">Orders</span>
          <div className="flex flex-col">
            <strong className="text-xl text-gray-700 font-semibold">
              $2.4k
            </strong>
            <span className="text-sm text-red-800 flex flex-row ">
              <span>
                <AiOutlineArrowDown />
              </span>{" "}
              2% <span className="text-black">this month</span>
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-20 w-20 flex items-center justify-center bg-sky-200">
          <LuWallet className="text-4xl text-sky-800" />
        </div>
        <div className="pl-2 flex flex-col">
          <span className="text-sm text-gray-500 font-light">Balance</span>
          <div className="flex flex-col">
            <strong className="text-xl text-gray-700 font-semibold">
              $2.4k
            </strong>
            <span className="text-sm text-red-800 flex flex-row ">
              <span>
                <AiOutlineArrowDown />
              </span>{" "}
              2% <span className="text-black">this month</span>
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-20 w-20 flex items-center justify-center bg-pink-300">
          <BsBagCheck className="text-4xl text-pink-800" />
        </div>
        <div className="pl-2 flex flex-col">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex flex-col">
            <strong className="text-xl text-gray-700 font-semibold">
              $89k
            </strong>
            <span className="text-sm text-green-600 flex flex-row ">
              <span>
                <AiOutlineArrowUp />
              </span>{" "}
              11% <span className="text-black">this month</span>
            </span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardGridStats;

const BoxWrapper = ({ children }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex-1 flex items-center h-32 cursor-pointer">
      {children}
    </div>
  );
};
