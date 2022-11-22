import React from "react";
import { Heatmap } from "../components";

// import { Ticket } from "../components";
import TicketsList from "../components/TicketsList";
import { useGetCouponsQuery } from "../redux/services/apiticket";

const Main = () => {
  const { data } = useGetCouponsQuery();

  return (
    <div className="">
      <div>
        <TicketsList data={data} />
      </div>

      <div className=" hidden lg:flex fixed right-12 top-4  flex-wrap max-w-[200px] ">
        {data?.data?.map((Tour, i) => (
          <div key={i}>
            <Heatmap matchRes={Tour.coupons_list_data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
