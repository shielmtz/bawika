import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import HomePageCard from "../components/homePageCard";
import dongeng from "../assets/dongeng.png";
import pembelajaran from "../assets/pembelajaran.png";
import tembang_macapat from "../assets/tempbang_macapat.png";


const PembelajaranNavbar = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#fee799]">
        <div className="container px-10 mx-auto my-16">
          <h3 className="text-4xl font-semibold text-center">Ayo Belajar Sambil Bermain Bersama!</h3>
          <div className="flex flex-col gap-16 mt-8">
            <HomePageCard
              name={"Dongeng Anak"}
              description={
                "Dongeng anak dengan berbagai kisah yang menarik, penuh pelajaran budaya Jawa yang asyik dan seru!"
              }
              src={dongeng}
              to={"/dongeng"}
            />
            <HomePageCard
              name={"Materi Pembelajaran"}
              description={
                "Belajar budaya dan bahasa Jawa, seru, penuh makna, dan melestarikan warisan leluhur."
              }
              src={pembelajaran}
              to={"/materipembelajaran"}
            />
            <HomePageCard
              name={"Tembang Jawa"}
              description={
                "Belajar budaya dan bahasa Jawa, seru, penuh makna, dan melestarikan warisan leluhur."
              }
              src={tembang_macapat}
              to={"/tembangjawa"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PembelajaranNavbar;
