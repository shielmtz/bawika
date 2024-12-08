import React from "react";
import tarian from "../assets/tarian.png";
import kesenian from "../assets/kesenian.png";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";

const MateriPembelajaran4 = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#fdfbf8] min-h-screen">
        {/* Main Content */}
        <main className="text-center p-6">
          <h1 className="text-2xl font-bold text-[#333] mb-6">
            Materi Pembelajaran
          </h1>
          {/* Button Group */}
          <div className="flex justify-center gap-4 mb-6">
            <Link
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#fff5da] text-[#333] font-bold rounded-full hover:bg-[#c9a763] hover:text-white transition"
              to="/materipembelajaran1"
            >
              Adat Istiadat
            </Link>
            <Link
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#fff5da] text-[#333] font-bold rounded-full hover:bg-[#c9a763] hover:text-white transition"
              to="/materipembelajaran2"
            >
              Bahasa Jawa
            </Link>
            <Link
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#fff5da] text-[#333] font-bold rounded-full hover:bg-[#c9a763] hover:text-white transition"
              to="/materipembelajaran3"
            >
              Pakaian Adat
            </Link>
            <Link
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#c9a763] text-white font-bold rounded-full"
              to="/materipembelajaran4"
            >
              Tari & Kesenian
            </Link>
            <Link
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#fff5da] text-[#333] font-bold rounded-full hover:bg-[#c9a763] hover:text-white transition"
              to="/materipembelajaran5"
            >
              Aksara Jawa
            </Link>
          </div>
          {/* Materi List */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Materi Card 1 */}
            <div className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform">
              <img
                src={tarian}
                alt="Pakaian Adat Pria"
                className="w-full h-44 object-cover"
              />
              <p className="text-lg font-bold text-[#333] p-4">
                Tarian Tradisional
              </p>
              <p className="text-justify text-sm text-[#555] px-4 pb-4">
                Tarian Jawa sangat beragam, mencerminkan kekayaan budaya dan
                tradisi daerah tersebut. Berikut adalah beberapa tarian Jawa:
                Tari Gambyong.
              </p>
            </div>

            {/* Materi Card 2 */}
            <div className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform">
              <img
                src={kesenian}
                alt="Pakaian Adat Wanita"
                className="w-full h-44 object-cover"
              />
              <p className="text-lg font-bold text-[#333] p-4">Kesenian</p>
              <p className="text-justify text-sm text-[#555] px-4 pb-4">
                Kesenian daerah Jawa sangat beragam dan mencakup berbagai bentuk
                seni yang mencerminkan budaya, tradisi, dan nilai-nilai
                masyarakat.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MateriPembelajaran4;