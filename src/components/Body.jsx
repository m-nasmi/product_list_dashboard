import React from "react";
import { useState } from "react";
import products from "../Products.json";

const Body = () => {
  const [accessories, setAccesories] = useState(products);

  const filterAccessories = (category) => {
    setAccesories(
      products.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setAccesories(
      products.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <div className="flex flex-col">
          <div className="flex flex-col justify-start items-start mb-5 text-lg px-3 font-medium">
            <p className="text-md">Accessories</p>
            <button
              onClick={() => setAccesories(products)}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              All
            </button>
            <button
              onClick={() => filterAccessories("mouse")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              Mouse
            </button>
            <button
              onClick={() => filterAccessories("keyboard")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              Keybord
            </button>
            <button
              onClick={() => filterAccessories("headset")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              Headset
            </button>
            <button
              onClick={() => filterAccessories("ram")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              RAM
            </button>
            <button
              onClick={() => filterAccessories("hard_disk")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              Hard disk
            </button>
            <button
              onClick={() => filterAccessories("processor")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              Processor
            </button>
          </div>
          <div className="flex flex-col justify-start items-start text-lg px-3 font-medium">
            <p className="text-md">Price</p>
            <button
              onClick={() => filterPrice("LKR 500")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              LKR 500
            </button>
            <button
              onClick={() => filterPrice("LKR 1000")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              LKR 1000
            </button>
            <button
              onClick={() => filterPrice("LKR 2000")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              LKR 2000
            </button>
            <button
              onClick={() => filterPrice("LKR 5000")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              LKR 5000
            </button>
            <button
              onClick={() => filterPrice("LKR 10000")}
              className="px-4 py-0.5 m-1 border border-blue-600 rounded-md bg-blue-400"
            >
              LKR 10000
            </button>
          </div>
        </div>
      </div>

      <div className="w-3/4 p-10">
        <div>
          <h1 className="text-lg sm:text-1xl flex justify-center items-center mb-5 lg:text-3xl px-3 font-extrabold text-w">
            Products
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-opacity-70 backdrop-blur-lg "
            >
              <img
                className="p-8 rounded w-[full] h-[300px] "
                src={item.image}
                alt={item.name}
              />
              <div className="p-5">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h1>
                <p className="text-gray-600">{item.price}</p>
                <p className="text-gray-600">{item.category}</p>
                <p className="text-gray-600">{item.Quantity}</p>
                <div className="flex items-center justify-between mt-3">
                  <button className="t px-4 py-1 bg-yellow-400 rounded-md hover:underline">
                    Edit
                  </button>
                  <button className=" px-4 py-1 bg-red-500 rounded-md hover:underline">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
