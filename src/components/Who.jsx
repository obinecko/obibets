import React from "react";

const Who = () => {
  return (
    <div className="flex">
      <div className="w-1/2 text-white grid place-content-center">
        <h1 className="text-7xl font-extrabold">ABOUT ?</h1>
        <h2 className="mt-14 max-w-[700px]">
          We provide the best professionally analysed soccer and basketball
          betting predictions on a daily basis, Our tips are powered by our AI
          engine using previous results and other factors that may affect the
          outcome of the match. We guarantee 90% hit rate with our games, The
          games are well organised into several coupons for a given date to
          guide user’s to place bet on given coupons.
        </h2>
      </div>
      <div className="w-1/2 object-cover max-w-[700px] max-h-[500px] mt-6 ">
        <img
          src="https://www.freelunch.co.in/wp-content/uploads/2018/07/machine-learning-in-sports.png"
          alt="homeimg"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Who;
