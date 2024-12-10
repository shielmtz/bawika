import React from "react";
import detailjawakrama from "../assets/bahasakrama.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png";
import tariangambir from "../assets/tariangambirjawatengah.png";
import unggahungguhbasa from "../assets/ungahunguhbasa.png";
import Navbar from "../components/navbar";

const DetailJawaKrama = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
        {/* Main Content */}
        <section className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">Bahasa Krama</h1>
          <div className="mt-4">
            <img
              src={detailjawakrama}
              alt="Bahasa Krama"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
          <p>
            Bahasa Jawa krama adalah tingkatan bahasa Jawa yang digunakan untuk
            menunjukkan rasa hormat dan kesopanan dalam komunikasi. Berbeda
            dengan ngoko yang lebih santai, krama memiliki struktur dan kosakata
            yang lebih formal, sehingga sering digunakan saat berbicara dengan
            orang yang lebih tua, tokoh masyarakat, atau orang yang baru
            dikenal. Dalam budaya Jawa, penggunaan krama mencerminkan tata krama
            dan budi pekerti yang menjadi bagian tak terpisahkan dari
            nilai-nilai kehidupan sehari-hari.
          </p>
          <p className="mt-4">
            Contoh penggunaan krama dapat terlihat dalam kalimat seperti
            "Panjenengan badhe dhahar menapa?" (Anda mau makan apa?), yang
            terasa lebih halus dibandingkan dengan bentuk ngoko. Selain itu,
            krama juga memiliki variasi lebih tinggi, yaitu krama inggil, yang
            digunakan untuk menunjukkan penghormatan tingkat tinggi, misalnya
            kepada raja atau pemimpin adat. Pemilihan ragam bahasa ini tidak
            hanya bergantung pada hubungan sosial tetapi juga pada situasi,
            seperti acara formal atau upacara adat.
          </p>
          <p className="mt-4">
            Bahasa Jawa krama berperan penting dalam menjaga nilai-nilai budaya
            dan moral masyarakat Jawa. Meskipun tantangan modernisasi membuat
            generasi muda kurang fasih menggunakan krama, upaya pelestarian
            terus dilakukan melalui pendidikan, seni, dan acara kebudayaan.
            Penggunaan krama bukan hanya soal berbahasa, tetapi juga tentang
            memahami dan menerapkan prinsip penghormatan, kesantunan, dan
            harmoni sosial dalam kehidupan bermasyarakat.
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

export default DetailJawaKrama;
