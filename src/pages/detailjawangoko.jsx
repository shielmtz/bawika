import React from "react";
import detailjawangoko from "../assets/bahasangoko.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png";
import tariangambir from "../assets/tariangambirjawatengah.png";
import unggahungguhbasa from "../assets/ungahunguhbasa.png";
import Navbar from "../components/navbar";

const DetailJawaNgoko = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
        {/* Main Content */}
        <section className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">Bahasa Ngoko</h1>
          <div className="mt-4">
            <img
              src={detailjawangoko}
              alt="Bahasa Ngoko"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
          <p>
            Bahasa Jawa Ngoko adalah salah satu tingkatan bahasa Jawa yang
            digunakan dalam percakapan sehari-hari, terutama di antara teman
            sebaya, anggota keluarga yang lebih muda, atau orang yang memiliki
            hubungan akrab. Ragam ini dikenal karena kesederhanaannya
            dibandingkan dengan tingkatan bahasa Jawa lainnya seperti krama dan
            krama inggil. Ngoko sering menjadi pintu awal bagi seseorang yang
            belajar bahasa Jawa karena kosakatanya yang relatif mudah dan tidak
            terlalu formal.
          </p>
          <p className="mt-4">
            Penggunaan ngoko menekankan kedekatan sosial dan rasa egaliter dalam
            komunikasi. Misalnya, kalimat seperti "Kowe arep mangan opo?" (Kamu
            mau makan apa?) menggunakan struktur yang lugas tanpa tambahan
            bentuk kehormatan. Namun, penting untuk memahami konteks
            penggunaannya, karena berbicara menggunakan ngoko kepada orang yang
            lebih tua atau dihormati dapat dianggap kurang sopan. Oleh karena
            itu, pembicara bahasa Jawa harus peka terhadap situasi sosial untuk
            memilih ragam bahasa yang sesuai.
          </p>
          <p className="mt-4">
            Bahasa Jawa Ngoko memiliki nilai budaya yang penting, karena
            mencerminkan hubungan akrab dan keintiman dalam masyarakat Jawa.
            Dalam konteks modern, ngoko juga sering digunakan dalam media
            sosial, percakapan sehari-hari, dan karya seni populer seperti lagu
            atau cerita pendek. Keberadaan ngoko membantu menjaga bahasa Jawa
            tetap hidup di kalangan generasi muda, sekaligus menjadi alat
            ekspresi yang fleksibel dan mudah dipahami dalam berbagai situasi.
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

export default DetailJawaNgoko;
