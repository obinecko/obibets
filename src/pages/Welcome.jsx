import React from "react";
import { Navbar } from "../components";
import About from "../components/About";

const Welcome = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default Welcome;
