import React from "react";
import { useNavigate } from "react-router-dom";
import cublakcublaksuweng from "../assets/cubleksuweng.png";
import gundulgundulpacul from "../assets/gundulpacul.png";
import gambangsuling from "../assets/gambangsuling.png";
import menthokmenthok from "../assets/menthok.png";
import Navbar from "../components/navbar";
import "@fontsource/poppins";



const tembangList = [
  { id: 1, title: "Cublak Cublak Suweng", image: cublakcublaksuweng },
  { id: 2, title: "Gundul Gundul Pacul", image: gundulgundulpacul },
  { id: 3, title: "Gambang Suling", image: gambangsuling },
  { id: 4, title: "Menthok Menthok", image: menthokmenthok },
 
];

const TembangJawa = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/tembang/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="bg-yellow-50  p-6   font-Poppins">
        <h1 className="text-3xl py-7 font-Poppins font-bold text-[45px] text-gray-700 pl-20 mb-6 ">
          Tembang Jawa
        </h1>
        <div className="space-y-4 max-w-4xl mx-auto rounded-t-10">
          {tembangList.map((tembang) => (
            <div
              key={tembang.id}
              className="flex items-center justify-between bg-[#fee799] p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleClick(tembang.id)}
            >
              <p className="text-lg font-semibold text-gray-700">
                {tembang.title}
              </p>
              <img
                src={tembang.image}
                alt={tembang.title}
                className="w-20 h-22 rounded-md text-center rounded-sm object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TembangJawa;
