import React from "react";
import detailaksarajawa from "../assets/aksara.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png";
import tariangambir from "../assets/tariangambirjawatengah.png";
import unggahungguhbasa from "../assets/ungahunguhbasa.png";
import Navbar from "../components/navbar";

const DetailAksaraJawa = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
        {/* Main Content */}
        <section className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">Aksara Jawa</h1>
          <div className="mt-4">
            <img
              src={detailaksarajawa}
              alt="Aksara Jawa"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
          <p>
            Aksara Jawa adalah sistem penulisan tradisional yang digunakan untuk
            menulis bahasa Jawa dan bahasa-bahasa Nusantara lainnya di masa
            lampau. Aksara ini berasal dari pengembangan aksara Kawi yang
            dipengaruhi oleh aksara Pallawa dari India. Digunakan sejak era
            Kerajaan Hindu-Buddha, aksara Jawa kerap ditemukan pada prasasti,
            naskah kuno, dan karya sastra. Dalam aksara Jawa, setiap karakter
            melambangkan satu suku kata, berbeda dengan alfabet Latin yang
            berbasis abjad.
          </p>
          <p className="mt-4">
            Aksara Jawa memiliki 20 aksara dasar yang dikenal sebagai{" "}
            <em>aksara nglegena</em>. Setiap aksara ini bisa dibentuk menjadi
            variasi bunyi yang berbeda dengan penambahan tanda baca atau{" "}
            <em>sandhangan</em>. Contoh beberapa aksara nglegena adalah ꦲ (ha),
            ꦤ (na), ꦏ (ka), dan ꦩ (ma). Aksara ini juga memiliki pasangan atau
            bentuk khusus untuk menghilangkan vokal pada aksara sebelumnya, yang
            memungkinkan pembentukan kata yang lebih kompleks. Sebagai contoh,
            kata "anak" dalam aksara Jawa bisa ditulis sebagai "ꦲꦤꦏ꧀".
          </p>
          <p className="mt-4">
            Meskipun aksara Jawa kini jarang digunakan dalam kehidupan
            sehari-hari, upaya pelestarian tetap dilakukan melalui pendidikan
            dan budaya. Banyak sekolah di Jawa memasukkan pelajaran aksara Jawa
            sebagai bagian dari muatan lokal. Di era digital, aksara Jawa dapat
            ditemukan pada beberapa aplikasi dan situs yang mendukung
            pembelajaran aksara, serta pada papan nama jalan dan dokumen resmi
            tertentu. Upaya ini bertujuan menjaga agar generasi muda tetap
            mengenal dan melestarikan warisan budaya Jawa yang unik ini.
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

export default DetailAksaraJawa;
