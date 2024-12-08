import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import upacaramantenan from "../assets/mantenan.png";
import ruwatan from "../assets/ruwatan.png";
import selametan from "../assets/selametan.png";
import sekaten from "../assets/sekaten.png";

const MateriPembelajaran1 = () => {
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
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#c9a763] text-white font-bold rounded-full"
              to="/materipembelajaran1"
            >
              Adat Istiadat
            </Link>
            <Link
              className="px-4 py-2 border-2 border-[#c9a763] bg-[#fff5da] text-[#333] font-bold rounded-full hover:bg-[#c9a763] hover:text-white tra"
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
                src={upacaramantenan}
                alt="Upacara Mantenan"
                className="w-full h-44 object-cover"
               
              />
              <p className="text-lg font-bold text-[#333] p-4">
                Upacara Mantenan
              </p>
              <p className="text-justify text-sm text-[#555] px-4 pb-4">
                Prosesi pernikahan adat Jawa yang penuh dengan simbol dan makna
                filosofis. Upacara ini terdiri dari beberapa tahapan, mulai dari
                lamaran.
              </p>
            </div>

            {/* Materi Card 2 */}
            <div className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform">
              <img
                src={ruwatan}
                alt="Ruwatan"
                className="w-full h-44 object-cover"
              />
              <p className="text-lg font-bold text-[#333] p-4">Ruwatan</p>
              <p className="text-justify text-sm text-[#555] px-4 pb-4">
                Upacara adat Jawa yang bertujuan untuk membersihkan atau
                membebaskan seseorang dari nasib buruk atau kesialan, yang
                dipercaya masyarakat.
              </p>
            </div>

            {/* Materi Card 3 */}
            <div className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform">
              <img
                src={selametan}
                alt="Selametan"
                className="w-full h-44 object-cover"
              />
              <p className="text-lg font-bold text-[#333] p-4">Selametan</p>
              <p className="text-justify text-sm text-[#555] px-4 pb-4">
                Upacara adat Jawa yang dilakukan untuk mengungkapkan rasa
                syukur, memohon keselamatan, atau meminta berkah kepada Tuhan.
              </p>
            </div>

            {/* Materi Card 4 */}
            <div className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform">
              <img
                src={sekaten}
                alt="Sekaten"
                className="w-full h-44 object-cover"
              />
              <p className="text-lg font-bold text-[#333] p-4">Sekaten</p>
              <p className="text-justify text-sm text-[#555] px-4 pb-4">
                Upacara tradisional Jawa yang diselenggarakan untuk memperingati
                kelahiran Nabi Muhammad SAW. Upacara ini berlangsung selama
                sepekan.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MateriPembelajaran1;
