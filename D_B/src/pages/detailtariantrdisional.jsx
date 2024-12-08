import React from "react";
import detailtariantradisional from "../assets/tarian.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png";
import tariangambir from "../assets/tariangambirjawatengah.png";
import unggahungguhbasa from "../assets/ungahunguhbasa.png";
import Navbar from "../components/navbar";

const DetailTarianTradisional = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
        {/* Main Content */}
        <section className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Tarian Tradisional Jawa
          </h1>
          <div className="mt-4">
            <img
              src={detailtariantradisional}
              alt="Tarian Tradisional Jawa"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
          <p>
            Selametan adalah tradisi budaya Indonesia yang bertujuan untuk
            mengungkapkan rasa syukur sekaligus memohon keberkahan dan
            keselamatan kepada Tuhan. Tradisi ini dilakukan oleh berbagai
            kalangan, baik dalam konteks pribadi, keluarga, maupun masyarakat.
            Selametan biasanya diadakan untuk menandai peristiwa penting seperti
            kelahiran, pernikahan, pindah rumah, hingga peringatan kematian.
            Dengan suasana yang sederhana namun sarat makna, tradisi ini
            mencerminkan rasa kebersamaan dan solidaritas dalam masyarakat.
          </p>
          <p className="mt-4">
            Ritual selametan biasanya melibatkan acara doa bersama yang dipimpin
            oleh tokoh agama atau orang yang dituakan, diikuti dengan pembagian
            makanan kepada para tamu. Tumpeng, nasi kuning berbentuk kerucut
            yang dikelilingi berbagai lauk-pauk, sering menjadi simbol utama
            dalam selametan, melambangkan harapan akan kehidupan yang harmonis
            dan sejahtera. Dalam beberapa tradisi, makanan yang disajikan
            memiliki makna khusus, seperti jenang yang melambangkan harapan akan
            rezeki yang terus mengalir. Selain makanan, acara ini juga menjadi
            momen untuk mempererat hubungan antaranggota masyarakat melalui
            suasana penuh kekeluargaan.
          </p>
          <p className="mt-4">
            Selametan tidak hanya memiliki nilai spiritual, tetapi juga
            mengajarkan pentingnya rasa syukur dan kebersamaan. Dalam kehidupan
            modern, meskipun bentuk dan pelaksanaannya mungkin mengalami
            penyesuaian, inti dari tradisi ini tetap relevan sebagai sarana
            untuk menyatukan hati, mempererat hubungan sosial, dan menjaga
            harmoni. Dengan mempertahankan tradisi selametan, masyarakat
            Indonesia melestarikan warisan budaya yang menghubungkan nilai
            spiritual dengan kehidupan sehari-hari.
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

export default DetailTarianTradisional;
