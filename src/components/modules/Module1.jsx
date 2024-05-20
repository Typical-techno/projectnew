import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const Module1 = () => {
  const data = [
    { label: "Intro 1", value: 40 },
    { label: "Intro 2", value: 22 },
    { label: "Intro 3", value: 11 },
  ];

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 40,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="space-y-4 border-b-2 py-4 w-fit md:w-full justify-center flex flex-col md:flex-col">
        <div className="flex justify-center">
          <p className="text-2xl w-fit md:w-full font-bold p-2">Module 1</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <PieChart
              series={[
                {
                  paddingAngle: 5,
                  innerRadius: 60,
                  outerRadius: 80,
                  data,
                },
              ]}
              margin={{ right: 5 }}
              width={200}
              height={200}
              legend={{ hidden: true }}
            >
              <PieCenterLabel>
                {data.reduce((acc, curr) => acc + curr.value, 0)}
              </PieCenterLabel>
            </PieChart>
          </div>
          <div>
            {data.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <button className="focus:bg-gray-300 rounded p-1 w-full justify-between flex gap-16">
                  <div className="mx-2 text-xl font-bold">{item.label}</div>
                  <div className="font-semibold text-xl mx-2 capitalize">
                    {item.value}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module1;
