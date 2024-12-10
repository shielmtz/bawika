import React from "react";
import  detailkesenian from "../assets/kesenian.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png"
import tariangambir from "../assets/tariangambirjawatengah.png"
import unggahungguhbasa from "../assets/ungahunguhbasa.png"
import Navbar from "../components/navbar";

const DetailKesenian = () => {
  return (
    <>
    <Navbar/> 
    <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
      {/* Main Content */}
      <section className="text-center mt-6">
        <h1 className="text-3xl font-bold text-gray-800">Kesenian Tradisional Jawa</h1>
        <div className="mt-4">
          <img
            src={detailkesenian}
            alt="Kesenian Tradisional Jawa"
            className="mx-auto w-full max-w-lg"
          />
        </div>
      </section>

      <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
        <p>
        Kesenian tradisional Jawa merupakan salah satu warisan budaya yang kaya dan beragam, mencakup seni tari, musik, wayang, hingga seni rupa. Kesenian ini tidak hanya menjadi sarana hiburan tetapi juga memiliki fungsi sosial, religius, dan pendidikan. Misalnya, wayang kulit, seni pertunjukan yang menggunakan boneka bayangan dari kulit kerbau, bukan hanya menyajikan cerita dari epos seperti Ramayana dan Mahabharata, tetapi juga menyampaikan pesan moral dan filosofi kehidupan. Kesenian tradisional ini berkembang seiring waktu tanpa kehilangan akar budaya yang mendalam.
        </p>
        <p className="mt-4">
        Musik gamelan adalah salah satu elemen utama dalam kesenian tradisional Jawa. Dengan alat musik seperti gong, saron, dan kendang, gamelan menciptakan harmoni nada yang lembut dan menenangkan, mencerminkan filosofi hidup masyarakat Jawa yang mengedepankan keseimbangan dan harmoni. Gamelan sering menjadi pengiring dalam berbagai pertunjukan seni, seperti wayang, tari, dan ritual adat, menjadikannya elemen integral dalam kehidupan budaya masyarakat Jawa. Selain itu, seni karawitan, yang melibatkan vokal dan musik gamelan, juga menjadi salah satu bentuk seni yang memperkaya tradisi Jawa.
        </p>
        <p className="mt-4">
        Kesenian tradisional Jawa terus dilestarikan meski tantangan modernisasi semakin besar. Upaya pelestarian dilakukan melalui pendidikan formal di sekolah seni, komunitas budaya, hingga festival-festival lokal maupun internasional. Dengan mempertahankan kesenian ini, masyarakat Jawa tidak hanya menjaga identitas budaya mereka tetapi juga memberikan kontribusi pada keberagaman seni dunia. Kesenian tradisional Jawa adalah bukti nyata bagaimana warisan budaya dapat tetap relevan dan dihargai lintas generasi.
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

export default DetailKesenian;