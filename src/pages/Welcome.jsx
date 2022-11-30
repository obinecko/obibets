import React from "react";
import { Who } from "../components";
// import { Navbar } from "../components";
import About from "../components/About";

const Welcome = () => {
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <About />
      </div>
      <Who />
    </div>
  );
};

export default Welcome;
