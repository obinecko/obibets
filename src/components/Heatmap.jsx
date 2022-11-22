import React from "react";

const Heatmap = ({ matchRes }) => {
  const Vysledok = matchRes?.map((test1) => test1.match_status);

  if (Vysledok == null) {
    return null;
  }

  return (
    <div className=" flex">
        
      <div
        className={
          Vysledok.includes("lost")
            ? "bg-red-500 h-[25px] w-[25px]  rounded-xl m-1 " 
            : Vysledok.includes("pending")
            ? " bg-orange-400 h-[25px] w-[25px]  rounded-xl m-1"
            : "bg-green-500 h-[25px] w-[25px]  rounded-xl m-1"
        }
      ></div>
    </div>
  );
};

export default Heatmap;
  