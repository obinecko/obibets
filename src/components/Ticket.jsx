import React from "react";
import Matches from "./Matches";

const Ticket = (props) => {
  // console.log(props);

  let cumsum = 1;
  const odd = props.matchData.map(({ odd_value }) => ({
    Total_kurz: (cumsum *= parseFloat(odd_value)),
  }));
  const lastElemnt = odd[odd.length - 1];

  const MatchStatus = props.matchData?.map((eachMach) => eachMach.match_status);

  return (
    <div className="flex cursor-pointer">
      <div
        className={
          MatchStatus.includes("lost")
            ? "bg-red-400/90 rounded-l-xl font-bold w-[70px] grid place-content-center"
            : MatchStatus.includes("pending")
            ? "bg-orange-400/90 rounded-l-xl font-bold w-[70px] grid place-content-center"
            : "bg-[#77db88] rounded-l-xl font-bold w-[70px] grid place-content-center"
        }
      >
        <span className="font-bold text-xl text-gray-500 ">
          {parseFloat(lastElemnt.Total_kurz).toFixed(2)}
        </span>
      </div>

      <div className="w-full">
        <Matches matchData={props.matchData} />
      </div>
    </div>
  );
};

export default Ticket;
