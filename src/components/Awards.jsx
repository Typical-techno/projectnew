import React, { useState } from "react";
import Award1 from "../assets/images/Award1.png";
import Award2 from "../assets/images/Award2.png";
import Award3 from "../assets/images/Award3.png";
import Award4 from "../assets/images/Award4.png";
import Award5 from "../assets/images/Award5.png";
import Award6 from "../assets/images/Award6.png";
import Award7 from "../assets/images/Award7.png";
import { topicAnalysis } from "../assets/data/topicAnalysis";
import Ranking from "./Ranking";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Module1 from "./modules/Module1";
import Module2 from "./modules/Module2";

const Awards = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getColor = (count) => {
    if (count > 75) return "bg-green-400";
    if (count >= 45) return "bg-yellow-400";
    return "bg-red-400";
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col md:flex-row gap-14">
          <div className="flex flex-col gap-8">
            <div>
              <div className="p-6  w-full">
                <div className="bg-white rounded-2xl p-6">
                  <div className="items-center flex justify-center flex-col">
                    <div className="flex justify-center p-2">
                      <p className="font-bold text-3xl">AWARDS</p>
                    </div>
                    <div className="flex flex-col md:flex-row w-full p-4 justify-center items-center">
                      <div className="flex items-center justify-center p-4 md:p-0 gap-8 md:gap-0">
                        <img
                          src={Award1}
                          alt="Award1"
                          height={100}
                          width={100}
                        />
                        <img
                          src={Award2}
                          alt="Award2"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="flex items-center justify-center p-4 md:p-0 gap-8 md:gap-0">
                        <img
                          src={Award3}
                          alt="Award3"
                          height={100}
                          width={100}
                        />
                        <img
                          src={Award4}
                          alt="Award4"
                          height={100}
                          width={100}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center p-2">
                      <p className="font-bold text-3xl text-gray-500">...</p>
                    </div>
                    <div className="flex justify-center">
                      <button onClick={handleOpen}>
                        <p className="font-bold text-xl text-gray-500">
                          AWARDS
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 w-full rounded-2xl my-2">
                <div className="bg-white p-4 w-full rounded-2xl">
                  <p className="font-bold text-3xl text-left py-4">
                    Topic Analysis
                  </p>
                  {topicAnalysis.map((topic, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center space-x-8 my-2"
                    >
                      <div className="mb-1 text-black text-base md:text-xl font-bold w-28">
                        {topic.topic}
                      </div>
                      <div className="w-11/12">
                        <div className="bg-gray-600 rounded-full h-4">
                          <div
                            className={`${getColor(
                              (topic.count / 15) * 100
                            )} h-4 rounded-full`}
                            style={{ width: `${(topic.count / 15) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-screen md:w-fit">
            <div className="flex flex-col md:mt-6 w-full rounded-2xl px-6">
              <div className="bg-white rounded-2xl w-full">
                <div className="p-4">
                  <p className="text-2xl font-bold">Questions Solved</p>
                </div>
                <div className="p4">
                  <Ranking />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {open ? (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="w-screen h-screen py-52 md:py-0 flex md:flex-col justify-center px-12 lg:px-96">
                <div className=" rounded-xl bg-white p-4 shadow">
                  <div className="py-4 flex justify-between">
                    <p className="font-bold text-2xl">Awards List</p>
                    <button onClick={handleClose}>
                      <p className="font-bold text-2xl px-4">྾</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex space-x-4">
                      <div className="items-center flex flex-col">
                        <img
                          src={Award1}
                          alt="Award 1"
                          height={100}
                          width={100}
                        />
                        <p className="font-bold text-gray-500 text-xl py-2">
                          Award 1
                        </p>
                      </div>
                      <div className="items-center flex flex-col">
                        <img
                          src={Award2}
                          alt="Award 1"
                          height={100}
                          width={100}
                        />
                        <p className="font-bold text-gray-500 text-xl py-2">
                          Award 2
                        </p>
                      </div>
                      <div className="items-center flex flex-col">
                        <img
                          src={Award3}
                          alt="Award 1"
                          height={100}
                          width={100}
                        />
                        <p className="font-bold text-gray-500 text-xl py-2">
                          Award 3
                        </p>
                      </div>
                      <div className="items-center flex flex-col">
                        <img
                          src={Award4}
                          alt="Award 1"
                          height={100}
                          width={100}
                        />
                        <p className="font-bold text-gray-500 text-xl py-2">
                          Award 4
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="items-center flex flex-col">
                        <img
                          src={Award5}
                          alt="Award 1"
                          height={100}
                          width={100}
                        />
                        <p className="font-bold text-gray-500 text-xl py-2">
                          Award 5
                        </p>
                      </div>
                      <div className="items-center flex flex-col">
                        <img
                          src={Award6}
                          alt="Award 1"
                          height={100}
                          width={100}
                        />
                        <p className="font-bold text-gray-500 text-xl py-2">
                          Award 6
                        </p>
                      </div>
                      <div className="items-center flex flex-col">
                        <img
                          src={Award7}
                          alt="Award 1"
                          height={100}
                          width={100}
                        />
                        <p className="font-bold text-gray-500 text-xl py-2">
                          Award 7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          ) : (
            <div></div>
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default Awards;
