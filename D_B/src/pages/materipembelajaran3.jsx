import React from "react";
import pakaianadatpria from "../assets/pakaianadatpria.png";
import pakaianadatwanita from "../assets/pakaianadatwanita.png";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/navbar";

const MateriPembelajaran3 = () => {
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
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#c9a763] text-white font-bold rounded-full"
              to="/materipembelajaran3"
            >
              Pakaian Adat
            </Link>
            <Link
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#fff5da] text-[#333] font-bold rounded-full hover:bg-[#c9a763] hover:text-white transition"
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
                src={pakaianadatpria}
                alt="Pakaian Adat Pria"
                className="w-full h-44 object-cover"
              />
              <p className="text-lg font-bold text-[#333] p-4">
                Pakaian Adat Pria
              </p>
              <p className="text-justify text-sm text-[#555] px-4 pb-4">
                Pakaian adat jawa untuk pria memiliki variasi yang kaya dan
                mencerminkan tradisi serta budaya yang mendalam, berikut adalah
                contoh pakaian adat pria.
              </p>
            </div>

            {/* Materi Card 2 */}
            <div className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform">
              <img
                src={pakaianadatwanita}
                alt="Pakaian Adat Wanita"
                className="w-full h-44 object-cover"
              />
              <p className="text-lg font-bold text-[#333] p-4">
                Pakaian Adat Wanita
              </p>
              <p className="text-justify text-sm text-[#555] px-4 pb-4">
                Pakaian adat jawa untuk wanita memiliki variasi yang kaya dan
                mencerminkan tradisi serta budaya yang beragam, berikut adalah
                contoh pakaian adat wanita.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MateriPembelajaran3;
