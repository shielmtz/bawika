import React from "react";
import detailpakaianwanitaa from "../assets/pakaianadatwanita.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png";
import tariangambir from "../assets/tariangambirjawatengah.png";
import unggahungguhbasa from "../assets/ungahunguhbasa.png";
import Navbar from "../components/navbar";

const DetailPakaianWanitaa = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
        {/* Main Content */}
        <section className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Pakaian Adat Jawa Wanita
          </h1>
          <div className="mt-4">
            <img
              src={detailpakaianwanitaa}
              alt="Pakaian Adat Jawa Pria"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
          <p>
            Pakaian adat wanita Jawa mencerminkan keanggunan, kelembutan, dan
            nilai budaya yang kaya. Salah satu elemen utamanya adalah kebaya,
            baju tradisional dengan potongan yang anggun dan mengikuti lekuk
            tubuh secara sederhana, melambangkan kesopanan dan kecantikan.
            Kebaya biasanya dibuat dari bahan yang ringan seperti brokat atau
            sutra dengan motif yang indah, mencerminkan kehalusan budaya Jawa.
            Kebaya ini dipadukan dengan kain batik sebagai bawahan, yang
            dililitkan di pinggang untuk menciptakan penampilan yang elegan dan
            serasi.
          </p>
          <p className="mt-4">
            Motif kain batik yang dikenakan wanita Jawa sering memiliki makna
            filosofis mendalam. Misalnya, motif sido mukti melambangkan harapan
            akan kehidupan yang sejahtera, sedangkan motif truntum melambangkan
            cinta kasih yang abadi. Selain kain batik, pakaian adat ini
            dilengkapi dengan aksesoris seperti sanggul (konde) untuk menata
            rambut, serta perhiasan seperti kalung, gelang, dan anting-anting
            yang menambah kesan anggun. Pada acara tertentu, seperti pernikahan
            adat, pakaian adat wanita Jawa juga dihiasi dengan aksen tambahan
            seperti hiasan kepala berupa melati yang melambangkan kesucian.
          </p>
          <p className="mt-4">
            Pakaian adat wanita Jawa tidak hanya berfungsi sebagai simbol
            keindahan, tetapi juga mencerminkan nilai-nilai kesopanan, kearifan
            lokal, dan kebanggaan budaya. Hingga kini, kebaya dan kain batik
            tetap menjadi busana pilihan dalam berbagai acara resmi dan adat,
            menunjukkan kemampuan tradisi untuk terus relevan dalam kehidupan
            modern. Melalui pelestarian pakaian adat ini, wanita Jawa turut
            menjaga warisan budaya yang memperkaya identitas bangsa Indonesia.
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

export default DetailPakaianWanitaa;
