import React from "react";
import { chapterRanking } from "../assets/data/chapterRanking";

const Ranking = () => {
  return (
    <div className="space-y-4 py-4">
       {Object.entries(chapterRanking).map(([chapter, { current, min, image, remark }], index) => (
      <div key={index}>
        <div>
          <p className="text-2xl font-bold p-2 border-t-4">{`Chapter ${index + 1}`}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center px-8">
          <img src={image} alt={`Award ${index + 1}`} height={200} width={200} />
          <div className="px-6">
            <p className="font-bold text-5xl">{current}</p>
            <p className="font-bold text-xl text-gray-500">{`(min: ${min})`}</p>
            <p className="font-bold text-xl text-gray-500">{remark}</p>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default Ranking;
