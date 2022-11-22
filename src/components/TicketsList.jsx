import React from "react";
import Ticket from "./Ticket";

const TicketsList = (props) => {
  console.log(props);

  return (
    <div>
      {props.data?.data?.map((couponsData, i) => {
        return (
          <div key={i}>
            <div className="mt-5 mb-10">
              <Ticket
                couponsData={couponsData}
                matchData={couponsData.coupons_list_data}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketsList;
