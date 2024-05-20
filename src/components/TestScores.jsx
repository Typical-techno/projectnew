import React, { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { testScoresData } from "../assets/data/testScoresData";
import Module1 from "./modules/Module1";
import Module2 from "./modules/Module2";
import Awards from "./Awards";

const TestScores = () => {
  const [selectedChapter, setSelectedChapter] = useState("chapter1");
  const chapterData = testScoresData[selectedChapter];
  const xAxisData = chapterData.map((test, index) => index + 1);
  const seriesData = chapterData.map((test) => test.score);

  const handleChapterChange = (chapter) => {
    setSelectedChapter(chapter);
  };

  const totalTests = Object.values(testScoresData).flat().length;
  const chapterCounts = {
    chapter1: testScoresData.chapter1.length,
    chapter2: testScoresData.chapter2.length,
    chapter3: testScoresData.chapter3.length,
  };

  const [graphWidth, setGraphWidth] = useState(
    window.innerWidth < 768 ? "300" : "430"
  );

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setGraphWidth(300);
  //     } else {
  //       setGraphWidth(500);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 py-4 justify-center">
        <div className="flex flex-col items-center space-y-6 md:mt-56 justify-center">
          <div className="p-6 rounded-2xl flex flex-col md:flex-col items-center justify-between md:w-full gap-10">
            <div className="bg-white flex px-12 py-8 rounded-2xl">
              <div className="justify-center items-center flex">
                <div className="w-fit md:w-fit">
                  <div className="text-center">
                    <p className="text-gray-500 font-bold text-2xl w-full">
                      Total Tests
                    </p>
                    <p className="text-5xl md:text-9xl font-bold">
                      {totalTests}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="md:mx-8 w-full p-4 items-center justify-center">
                  {["chapter1", "chapter2", "chapter3"].map((chapter) => (
                    <div
                      key={chapter}
                      className="flex justify-between items-center"
                    >
                      <button
                        className={`focus:bg-gray-300 rounded p-1 w-full justify-between flex ${
                          selectedChapter === chapter ? "bg-gray-300" : ""
                        } gap-9`}
                        onClick={() => handleChapterChange(chapter)}
                      >
                        <div className="font-bold text-sm md:text-xl mx-2 capitalize">
                          {chapter.replace("chapter", "Chapter ")}
                        </div>
                        <div className="mx-2 text-sm md:text-xl">
                          {chapterCounts[chapter]}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl w-fit">
              <div className="p-8">
                <LineChart
                  xAxis={[{ data: xAxisData }]}
                  series={[
                    {
                      data: seriesData,
                    },
                  ]}
                  height={300}
                  width={graphWidth}
                  className="w-fit"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-screen md:w-fit">
          <div className="flex flex-col md:mt-64 w-full rounded-2xl px-6">
            <div className="bg-white rounded-2xl w-full">
              <div className="p-4 border-b-2">
                <p className="text-2xl font-bold">Questions Solved</p>
              </div>
              <div className="p4">
                <Module1 />
                <Module2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Awards />
    </div>
  );
};

export default TestScores;
