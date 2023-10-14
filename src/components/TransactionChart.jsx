import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    sales: 3200,
  },
  {
    name: "Feb",
    sales: 2600,
  },
  {
    name: "Mar",
    sales: 5500,
  },
  {
    name: "Apr",
    sales: 3800,
  },
  {
    name: "May",
    sales: 4700,
  },
  {
    name: "Jun",
    sales: 1700,
  },
  {
    name: "July",
    sales: 4900,
  },
  {
    name: "Aug",
    sales: 6000,
    fill: "#5a32ea", // Set the color for August to blue
  },
  {
    name: "Sep",
    sales: 5500,
  },
  {
    name: "Oct",
    sales: 4100,
  },
  {
    name: "Nov",
    sales: 3800,
  },
  {
    name: "Dec",
    sales: 4300,
  },
];

const TransactionChart = () => {
  return (
    <div className="bg-white ml-10 p-4 rounded-lg flex flex-col w-full h-[16rem]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <strong className="text-gray-700 font-extrabold">Overview</strong>
          <span className="text-gray-500 text-sm">Monthly Earning</span>
        </div>
        <div className="flex flex-row gap-6 text-gray-500 text-sm bg-gray-200 items-center rounded-lg px-6 cursor-pointer">
          <span>Quarterly</span>
          <span>
            {" "}
            <AiOutlineDown size={14} />
          </span>
        </div>
      </div>
      <div className="mt-1 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={180} // Increase the width
            height={180} // Increase the height
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <XAxis
              dataKey="name"
              className="text-black font-bold"
              axisLine={false}
              tickLine={false}
            />
            <Bar
              dataKey="sales"
              barSize={32}
              fill="#E2E8F0"
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
