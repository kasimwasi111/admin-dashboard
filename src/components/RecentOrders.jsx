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
    stock: "32 in stock",
  },
  {
    id: 1,
    image: pr2,
    name: "Men's Dri-FIT T-Shirt",
    price: 249.0,
    brand: "Nike",
    status: "in stock",
    total: 20,
    stock: "32 in stock",
  },
  {
    id: 2,
    image: pr3,
    name: "Women's Badge of Sport Tee",
    price: 399.0,
    brand: "Adidas",
    total: 20,
    stock: "32 in stock",
  },
  {
    id: 3,
    image: pr4,
    name: "Men's 1950s Sportswear T-Shirt",
    price: 499.0,
    brand: "Levi s",
    total: 20,
    stock: "32 in stock",
  },
  {
    id: 4,
    image: pr5,
    name: "Men's Tech 2.0 Short Sleeve T-Shirt",
    price: 499.0,
    brand: "Under Armour",
    total: 20,
    stock: "32 in stock",
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-white p-2 rounded-lg mx-10 my-2 w-full">
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
          <div className=" focus:outline-none active:outline-none w-[12rem] h-8 p-4 rounded-lg bg-gray-200 flex gap-16 items-center">
            <span className="text-xs text-gray-600">Last 30 days</span>
            <span className="text-gray-500">
              {" "}
              <AiOutlineDown size={14} />
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-sm mt-1">
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
                <td>
                  <div className="flex items-center space-x-2">
                    <div>
                      <img
                        src={order.image}
                        alt="Product"
                        className="w-16 h-10 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-md font-bold">{order.name}</span>
                      <span className="text-gray-600">{order.brand}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="text-sm font-medium">{order.stock}</div>
                </td>
                <td>
                  <div className="text-sm font-bold">${order.price}</div>
                </td>
                <td>
                  <div className="text-sm font-semibold">{order.total}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
