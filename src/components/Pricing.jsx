import React from "react";
import { GiCheckMark } from "react-icons/gi";

const Pricing = () => {
  return (
    <div className="flex sm:flex-col md:flex-row justify-center">
      {/* free */}
      <div className="rounded-lg border md:w-1/3 h-[350px] max-w-[400px]  bg-gradient-to-br from-red-600 ml-4  ">
        <h2 className="text-3xl  font-extrabold text-center my-4">Trial</h2>
        <div className=" items-baseline text-white flex my-6 ml-8  ">
          <span className="text-3xl font-semibold">€</span>
          <span className="text-5xl font-extrabold tracking-tight">0.0</span>
          <span className="ml-1 text-xl font-normal text-gray-300">/month</span>
        </div>
        <ul className="grid place-content-center text-white font-semibold ">
          <li className="flex my-4 ">
            <GiCheckMark size={20} className="mr-4" />
            Past coupons only
          </li>
          <li className="flex my-4">
            <GiCheckMark size={20} className="mr-4" />
            only 1 sport category
          </li>
        </ul>
        <div className="grid place-content-center pt-8">
          <button className=" w-[250px] grid  place-content-center  bg-black text-white font-semibold rounded-xl p-2 hover:bg-red-500">
            Select plan
          </button>
        </div>
      </div>

      {/* standard  */}
      <div className="rounded-lg border md:w-1/3 h-[350px] max-w-[400px] bg-gradient-to-br from-orange-400 ml-4  ">
        <h2 className="text-3xl  font-extrabold text-center my-4">Standard</h2>
        <div className=" items-baseline text-white flex my-6 ml-8 ">
          <span className="text-3xl font-semibold">€</span>
          <span className="text-5xl font-extrabold tracking-tight">1.99</span>
          <span className="ml-1 text-xl font-normal text-gray-300">/month</span>
        </div>
        <ul className="grid place-content-center text-white font-semibold ">
          <li className="flex my-4 ">
            <GiCheckMark size={20} className="mr-4" /> max limit 3 tips/day
          </li>
          <li className="flex my-4">
            <GiCheckMark size={20} className="mr-4" />
            only 2 sports categories
          </li>
        </ul>
        <div className="grid place-content-center pt-8">
          <button className=" w-[250px] grid  place-content-center  bg-black text-white font-semibold rounded-xl p-2 hover:bg-orange-500">
            Select plan
          </button>
        </div>
      </div>

      {/* pro */}
      <div className="rounded-lg border md:w-1/3 h-[350px] max-w-[400px] bg-gradient-to-br from-green-400 ml-4  animate-pulse">
        <h2 className="text-3xl  font-extrabold text-center my-4">Premium</h2>
        <div className=" items-baseline text-white flex my-6 ml-8 ">
          <span className="text-3xl font-semibold">€</span>
          <span className="text-5xl font-extrabold tracking-tight">4.99</span>
          <span className="ml-1 text-xl font-normal text-gray-300">/month</span>
        </div>
        <ul className="grid place-content-center text-white font-semibold ">
          <li className="flex my-1 ">
            <GiCheckMark size={20} className="mr-4" /> all coupons
          </li>
          <li className="flex my-1">
            <GiCheckMark size={20} className="mr-4" />
            all sports categories
          </li>
          <li className="flex my-1">
            <GiCheckMark size={20} className="mr-4" />
            unlimited tips/day
          </li>
          <li className="flex my-1">
            <GiCheckMark size={20} className="mr-4" />
            premium tips
          </li>
        </ul>
        <div className="grid place-content-center pt-4">
          <button className=" w-[250px] grid  place-content-center  bg-black text-white font-semibold rounded-xl p-2 hover:bg-green-500">
            Select plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
