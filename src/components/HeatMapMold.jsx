import React from "react";
import { userData } from "../assets/data/userData";
import { heatMapData } from "../assets/data/heatMapData";
import HeatMap from "@uiw/react-heat-map";

const HeatMapMold = () => {
  function sumCount(heatMapData) {
    return heatMapData.reduce((acc, curr) => acc + curr.count, 0);
  }

  const totalSum = sumCount(heatMapData);

  return (
    <div
      style={{ backgroundColor: "#DFD6D6" }}
      className="justify-center items-center md:justify-between lg:fixed md:fixed"
    >
      <div
        className="flex flex-col lg:flex-row md:flex-row gap-12 md:gap-40 py-2 h-fit justify-center md:h-full "
        style={{ backgroundColor: "#DFD6D6" }}
      >
        <div className="justify-center flex md:w-fit w-screen px-6 md:block md:px-0">
          <div className="bg-white py-4 px-2 md:p-4 flex justify-center w-full items-center flex-col rounded-2xl md:h-full">
            <p className="font-bold text-2xl md:text-3xl text-gray-500 text-center">
              Total Questions
            </p>
            <p className="font-bold text-6xl md:text-9xl text-center">
              {userData.totalQuestions}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-screen px-6 md:w-fit md:block md:px-0">
          <div className="bg-white p-2 w-full px-4 md:p-4 rounded-2xl flex flex-col">
            <div className="flex justify-center md:justify-between flex-col md:flex-row items-center md:space-x-16">
              <div className="flex space-x-1">
                <p className="font-bold">{totalSum}</p>
                <p className="text-gray-500 font-bold">
                  Submission in last Months
                </p>
              </div>
              <div className="flex space-x-1">
                <p className="text-gray-500 font-bold">Total Active Days:</p>
                <p className="font-bold">{userData.currentStreak}</p>
              </div>
              <div className="flex space-x-1">
                <p className="text-gray-500 font-bold">Current Streak:</p>
                <p className="font-bold">{userData.currentStreak}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center md:justify-between md:flex-row items-center">
              <div className="mt-7">
                <HeatMap
                  value={heatMapData}
                  weekLabels={["", "", "", "", "", "", ""]}
                  startDate={new Date("2024/01/01")}
                  monthPlacement="top"
                  space={2}
                  legendCellSize={0}
                  rectSize={11}
                  className="flex items-center justify-center font-bold "
                />
              </div>

              <div className="bg-white p-4 flex items-center flex-col justify-center text-center">
                <p className="text-6xl font-bold">{userData.maxStreak}</p>
                <p className="text-gray-500 font-bold w-fit">Max Streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMapMold;
