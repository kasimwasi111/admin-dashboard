import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import pr1 from "../lib/images/f1.jpg";
import pr2 from "../lib/images/f2.jpg";
import pr3 from "../lib/images/f3.jpg";
import pr4 from "../lib/images/f4.jpg";
import pr5 from "../lib/images/f5.jpg";

const recentOrderData = [
  {
    id: 0,
    image: pr1,
    name: "Slim Fit Dress Shirt",
    price: 499.0,
    brand: "Calvin Klein",
    total: 20,
    stock: 32,
  },
  {
    id: 1,
    image: pr2,
    name: "Men's Dri-FIT T-Shirt",
    price: 249.0,
    brand: "Nike",
    status: "in stock",
    total: 20,
    stock: 32,
  },
  {
    id: 2,
    image: pr3,
    name: "Women's Badge of Sport Tee",
    price: 399.0,
    brand: "Adidas",
    total: 20,
    stock: 32,
  },
  {
    id: 3,
    image: pr4,
    name: "Men's 1950s Sportswear T-Shirt",
    price: 499.0,
    brand: "Levi s",
    total: 20,
    stock: 32,
  },
  {
    id: 4,
    image: pr5,
    name: "Men's Tech 2.0 Short Sleeve T-Shirt",
    price: 499.0,
    brand: "Under Armour",
    total: 20,
    stock: 32,
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-lg mx-10 my-4 ">
      <div className="flex items-center justify-between">
        <div className="text-black ">
          <p className="text-gray-700 font-extrabold">Product Sell</p>
        </div>

        <div className="justify-end flex gap-4">
          <div className="relative">
            <FaSearch
              fontSize={16}
              className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search"
              className="text-xs focus:outline-none active:outline-none w-[12rem] h-8 pl-8 pr-4 rounded-lg bg-gray-200"
            />
          </div>
          <div className=" focus:outline-none active:outline-none w-[12rem] h-8 pl-8 pr-4 rounded-lg bg-gray-200 flex gap-6 items-center">
            <span className="text-xs text-gray-600">Last 30 days</span>
            <span>
              {" "}
              <AiOutlineDown size={14} />
            </span>
          </div>
        </div>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sale</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.stock}</td>
                <td>${order.price}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
