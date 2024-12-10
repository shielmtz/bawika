import React from "react";
import  upacaramantenan from "../assets/mantenan.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png"
import tariangambir from "../assets/tariangambirjawatengah.png"
import unggahungguhbasa from "../assets/ungahunguhbasa.png"
import Navbar from "../components/navbar";

const DetailUpacaraMantenan = () => {
  return (
    <>
    <Navbar/> 
    <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
      {/* Main Content */}
      <section className="text-center mt-6">
        <h1 className="text-3xl font-bold text-gray-800">Upacara Mantenan</h1>
        <div className="mt-4">
          <img
            src={upacaramantenan}
            alt="Upacara Mantenan"
            className="mx-auto w-full max-w-lg"
          />
        </div>
      </section>

      <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
        <p>
        Upacara mantenan merupakan rangkaian tradisi dalam pernikahan yang sarat dengan nilai budaya dan makna filosofis. Di berbagai daerah di Indonesia, upacara mantenan memiliki variasi yang berbeda sesuai adat setempat, seperti adat Jawa, Sunda, Minang, hingga Bugis. Namun, secara umum, upacara ini melambangkan penyatuan dua insan sekaligus dua keluarga yang diikat dalam perjanjian suci pernikahan. Prosesi ini biasanya dipenuhi simbol-simbol yang menunjukkan harapan, doa, dan rasa syukur atas perjalanan hidup baru pasangan pengantin.

        </p>
        <p className="mt-4">
        Dalam upacara mantenan, terdapat beberapa tahapan penting, seperti akad nikah, panggih (pertemuan pertama pengantin), hingga resepsi. Pada adat Jawa, misalnya, prosesi panggih melibatkan ritual seperti siraman, balangan gantal (lempar sirih), dan sungkeman. Masing-masing ritual memiliki makna mendalam, seperti doa untuk kebersihan jiwa, kesetiaan, dan rasa hormat kepada orang tua. Dalam tradisi lain, seperti adat Minangkabau, upacara baralek biasanya mencakup pengiringan pengantin dengan iringan musik tradisional yang meriah dan melibatkan masyarakat luas sebagai bentuk kebersamaan.
        </p>
        <p className="mt-4">
          

Selain mempererat hubungan kekeluargaan, upacara mantenan juga menjadi ajang pelestarian nilai-nilai tradisi. Generasi muda diajak untuk memahami dan menghormati akar budaya mereka melalui keterlibatan dalam prosesi ini. Meski zaman terus berkembang, banyak keluarga yang berusaha menjaga elemen tradisional dalam upacara pernikahan sebagai wujud cinta terhadap budaya leluhur. Hal ini menciptakan perpaduan unik antara tradisi dan modernitas, menjadikan setiap upacara mantenan tak hanya sebagai peristiwa sakral tetapi juga momen bersejarah yang penuh makna.
        </p>
      </article>
      {/* Recommendations */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Rekomendasi</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-100">
            <img
              src={pakaianadatjawabarat}
              alt="Pakaian Adat Provinsi Jawa Barat"
              className="w-full h-32 object-cover"
            />
            <p className="mt-2 text-gray-700 font-bold text-sm">
              Pakaian Adat Jawa Barat
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-100">
            <img
              src={tariangambir}
              alt="Tarian Gambir Anyom Jawa Tengah"
              className="w-full h-32 object-cover"
            />
            <p className="mt-2 text-gray-700 font-bold text-sm">
              Tarian Gambir Anyom Jawa Tengah
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-100">
            <img
              src={unggahungguhbasa}
              alt="Unggah Ungguh Basa"
              className="w-full h-32 object-cover"
            />
            <p className="mt-2 text-gray-700 font-bold text-sm">
              Unggah Ungguh Basa
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default DetailUpacaraMantenan;