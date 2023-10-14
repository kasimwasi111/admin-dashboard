import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 25 },
  { name: "Group B", value: 35 },
  { name: "Group C", value: 40 },
];
const COLORS = ["#f23f9d", "#f1effc", "#5832e9"];

const BuyerProfileChart = () => {
  // Calculate the total value
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  // Calculate the percentage
  const percentage = (
    ((data[0].value + data[2].value) / totalValue) *
    100
  ).toFixed(0);

  return (
    <div className="bg-white mr-10 rounded-lg flex flex-col w-[20rem] h-[16rem]">
      <div className="flex flex-col p-4">
        <strong className="text-gray-700 font-extrabold">Customers</strong>
        <span className="text-gray-500 text-sm">
          Customers that buy products
        </span>
      </div>
      <div className="mt-1 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="80%">
          <PieChart width={150} height={150}>
            <Pie data={data} innerRadius={40} outerRadius={70} dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* Add custom HTML for displaying "65%" in bold style in the center */}
            <foreignObject x="0" y="0" width="100%" height="100%">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <span className="font-bold text-xl">{`${percentage}%`}</span>
                <p className="text-xs text-center">
                  Total New
                  <br />
                  Customers
                </p>
              </div>
            </foreignObject>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerProfileChart;
