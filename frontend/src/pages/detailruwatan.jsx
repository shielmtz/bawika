import React from "react";
import detailruwetan from "../assets/ruwatan.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png";
import tariangambir from "../assets/tariangambirjawatengah.png";
import unggahungguhbasa from "../assets/ungahunguhbasa.png";
import Navbar from "../components/navbar";

const DetailRuwetan = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
        {/* Main Content */}
        <section className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">Ruwetan</h1>
          <div className="mt-4">
            <img
              src={detailruwetan}
              alt="Ruwetan"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
          <p>
            Ruwetan adalah salah satu tradisi Jawa yang memiliki tujuan utama
            untuk membersihkan diri, baik secara lahir maupun batin. Upacara ini
            biasanya dilakukan sebagai bentuk permohonan keselamatan,
            kelancaran, dan perlindungan dalam menghadapi suatu peristiwa besar
            atau fase baru dalam kehidupan. Ruwetan sering kali diadakan pada
            momen-momen tertentu, seperti pindah rumah, memulai usaha, hingga
            sebelum acara pernikahan. Tradisi ini mengandung doa dan harapan
            agar segala halangan atau kesulitan dapat dijauhkan, sehingga hidup
            menjadi lebih tertata dan terarah.
          </p>
          <p className="mt-4">
            Dalam pelaksanaannya, ruwetan melibatkan berbagai ritual simbolis.
            Salah satu yang paling umum adalah penggunaan sesaji, seperti
            tumpeng, bunga, kemenyan, hingga makanan tertentu yang memiliki
            makna filosofis. Selain itu, biasanya terdapat doa atau mantra yang
            diucapkan oleh seorang pemimpin ritual, seperti tokoh adat atau
            sesepuh. Ruwetan juga sering disertai dengan prosesi siraman, yaitu
            penyiraman air suci yang melambangkan penyucian dari segala hal
            negatif. Kombinasi antara elemen spiritual dan tradisional ini
            mencerminkan kedekatan masyarakat Jawa dengan alam serta keyakinan
            akan harmoni antara manusia, lingkungan, dan Sang Pencipta.
          </p>
          <p className="mt-4">
            Ruwetan bukan hanya sekadar ritual, tetapi juga media refleksi diri
            bagi individu atau keluarga yang menjalankannya. Dalam konteks
            modern, meskipun banyak orang yang tidak lagi menjalankan ruwetan
            secara penuh, nilai-nilai yang terkandung di dalamnya tetap relevan,
            seperti introspeksi diri, menghargai warisan leluhur, dan membangun
            niat yang tulus sebelum memulai sesuatu. Tradisi ini menjadi
            pengingat bahwa hidup bukan hanya tentang rencana dan usaha, tetapi
            juga tentang menjaga keseimbangan spiritual dan rasa syukur terhadap
            apa yang telah diberikan.
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

export default DetailRuwetan;
