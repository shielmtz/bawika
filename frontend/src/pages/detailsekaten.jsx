import React from "react";
import detailsekaten from "../assets/sekaten.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png";
import tariangambir from "../assets/tariangambirjawatengah.png";
import unggahungguhbasa from "../assets/ungahunguhbasa.png";
import Navbar from "../components/navbar";

const DetailSekaten = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
        {/* Main Content */}
        <section className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">Sekaten</h1>
          <div className="mt-4">
            <img
              src={detailsekaten}
              alt="Sekaten"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
          <p>
            Sekaten adalah tradisi unik yang berasal dari Jawa, khususnya di
            Yogyakarta dan Surakarta, yang diselenggarakan untuk memperingati
            Maulid Nabi Muhammad SAW. Tradisi ini memiliki akar sejarah yang
            erat dengan penyebaran Islam di tanah Jawa oleh Wali Songo,
            khususnya Sunan Kalijaga. Kata "Sekaten" diyakini berasal dari kata
            "Syahadatain," yang merujuk pada dua kalimat syahadat dalam Islam,
            sebagai ajakan untuk menguatkan keimanan. Upacara Sekaten
            mencerminkan perpaduan nilai keagamaan dan budaya Jawa yang kaya
            akan simbol dan makna.
          </p>
          <p className="mt-4">
            Rangkaian acara Sekaten biasanya dimulai dengan prosesi "Garebeg
            Maulud," yaitu upacara kerajaan yang melibatkan kirab pusaka,
            termasuk dua gamelan kuno, Kyai Guntur Madu dan Kyai Nagawilaga.
            Gamelan ini dimainkan di halaman Masjid Agung sebagai simbol dakwah
            Islam melalui seni. Masyarakat berbondong-bondong mengikuti acara
            ini, percaya bahwa kehadiran dalam Sekaten membawa berkah dan
            keselamatan. Selain prosesi keagamaan, Sekaten juga dimeriahkan
            dengan pasar malam yang menghadirkan berbagai hiburan, makanan
            tradisional, dan kerajinan lokal, menjadikannya perayaan yang
            menarik semua kalangan.
          </p>
          <p className="mt-4">
            Tradisi Sekaten tidak hanya menjadi sarana untuk mendekatkan diri
            kepada Tuhan, tetapi juga melestarikan warisan budaya dan sejarah
            Jawa. Di tengah modernisasi, Sekaten tetap bertahan sebagai momen
            penting untuk memperkuat identitas budaya sekaligus menanamkan
            nilai-nilai spiritual. Kehadiran masyarakat dalam tradisi ini
            menunjukkan bagaimana harmoni antara agama dan budaya dapat dijaga,
            menjadikan Sekaten tidak hanya sebagai perayaan keagamaan tetapi
            juga festival rakyat yang memupuk kebersamaan dan kebanggaan akan
            budaya lokal.
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

export default DetailSekaten;
