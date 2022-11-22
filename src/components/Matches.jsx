import React from "react";

const Matches = (props) => {
  // console.log(props);
  return (
    <div>
      {props.matchData.map((match, i) => {
        
        return (
          <div className="bg-[#222447] text-[#787bc2] " key={i}>
            <table className=" text-left text-sm  w-full ">
              <tr className=" border border-gray-600">
                <td className="w-1/5 pl-2 p-1  ">{match.home_team}</td>
                <td className="text-[#cb4e4b] w-[10px]">vs</td>
                <td className="min-w-[200px] w-1/4 pl-8">{match.away_team}</td>
                <td className="w-[100px]">{match.match_date}</td>
                <td className="w-[100px]">{match.match_time}</td>
                <td className="text-blue-400 font-bold text-center">
                  {match.game_prediction}
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Matches;
