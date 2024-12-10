import React from "react";
import detailpakaianpria from "../assets/pakaianadatpria.png";
import pakaianadatjawabarat from "../assets/pakaianadatjawabarat.png";
import tariangambir from "../assets/tariangambirjawatengah.png";
import unggahungguhbasa from "../assets/ungahunguhbasa.png";
import Navbar from "../components/navbar";

const DetailPakaianPria = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-4 py-6">
        {/* Main Content */}
        <section className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Pakaian Adat Jawa Pria
          </h1>
          <div className="mt-4">
            <img
              src={detailpakaianpria}
              alt="Pakaian Adat Jawa Pria"
              className="mx-auto w-full max-w-lg"
            />
          </div>
        </section>

        <article className="mt-8 mx-auto max-w-4xl text-justify text-gray-700 leading-7">
          <p>
            Pakaian adat pria Jawa mencerminkan keanggunan, kesopanan, dan nilai
            budaya yang tinggi. Salah satu komponen utama pakaian adat ini
            adalah beskap, sejenis jas tradisional yang dipadukan dengan kain
            batik sebagai bawahan. Beskap biasanya memiliki warna gelap seperti
            hitam atau cokelat tua, melambangkan ketegasan dan kewibawaan pria
            Jawa. Bagian kerah beskap yang tinggi serta potongannya yang khas
            menunjukkan perpaduan antara kesederhanaan dan formalitas,
            menjadikan pakaian ini sering digunakan dalam acara-acara resmi atau
            upacara adat.
          </p>
          <p className="mt-4">
            Selain beskap, pria Jawa juga mengenakan kain batik yang dililitkan
            di pinggang sebagai bawahan. Motif batik yang digunakan sering kali
            memiliki makna filosofis tertentu, seperti motif parang yang
            melambangkan perjuangan hidup atau motif sido asih yang melambangkan
            harapan akan kebahagiaan. Pakaian ini juga dilengkapi dengan ikat
            kepala yang disebut blangkon, yang tidak hanya berfungsi sebagai
            pelengkap busana tetapi juga memiliki makna simbolis. Blangkon
            melambangkan sikap rendah hati dan kemampuan mengendalikan diri,
            sesuai dengan nilai-nilai luhur masyarakat Jawa.
          </p>
          <p className="mt-4">
            Pakaian adat pria Jawa tidak hanya digunakan sebagai penutup tubuh,
            tetapi juga sebagai media untuk mengekspresikan identitas budaya dan
            nilai-nilai kehidupan. Dalam konteks modern, pakaian ini masih
            sering digunakan dalam acara pernikahan, upacara kenegaraan, dan
            festival budaya. Keberadaannya menjadi bukti bahwa meskipun zaman
            terus berkembang, masyarakat Jawa tetap menjaga tradisi leluhur
            mereka dengan penuh rasa bangga dan hormat.
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

export default DetailPakaianPria;
