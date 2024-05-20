import React from "react";
import TestScore from "./TestScores";
import HeatMapMold from "./HeatMapMold";
import Awards from "./Awards";

const Home = () => {
  return (
    <div className="lg:flex md:flex justify-center">
      <div className="z-20">
        <HeatMapMold />
      </div>
      <div className="z-10 overflow-hidden">
        <TestScore />
        {/* <Awards/> */}
      </div>
    </div>
  );
};

export default Home;
