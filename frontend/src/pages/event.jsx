import { Link } from "react-router-dom";
import poster from "../assets/poster.jpeg";
import Navbar from "../components/navbar";

const Event = () => {
  return (
    <>
      <Navbar />
      <div className="container flex flex-row mx-auto">
        <div className="flex flex-col px-8 basis-3/5">
          <h2 className="text-5xl font-medium">Event Lomba</h2>
          <p className="mt-4 font-medium">
            Pada info event lomba, kami menyediakan berbagai macam lomba tentang
            bahasa jawa, sastra dan masih banyak lomba lainnya yang nantinya
            bisa kalian ikuti!
          </p>
          <div className="flex flex-col p-6 mt-8 border border-black">
            <h3 className="text-xl font-semibold">
              Biaya Pendaftaran :{" "}
              <span className="ml-8 text-base font-normal">Rp. 35.000</span>
            </h3>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Syarat dan Ketentuan :</h3>
              <ul className="flex flex-col gap-2 ml-6 list-disc list-inside">
                <li>Peserta: Anak usia 7-12 tahun</li>
                <li>
                  Tema: Karya dalam bentuk cerita, puisi, atau dongeng
                  menggunakan bahasa Jawa.
                </li>
                <li>
                  Karya Orisinal: Belum pernah dipublikasikan atau
                  diikutsertakan dalam lomba lain.{" "}
                </li>
                <li>
                  Transaksi dilakukan melalui chat admin di aplikasi yang
                  ditentukan. :{" "}
                  <Link
                    className="text-blue-600"
                    to={"https://wa.me/6282113823093"}
                  >
                    https://wa.me/6282113823093
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Kriteria Penilaian :</h3>
              <ul className="flex flex-col gap-2 ml-6 list-disc list-inside">
                <li>
                  Kreativitas: Keunikan ide dan cara penyampaian cerita atau
                  puisi.
                </li>
                <li>
                  Bahasa: Penggunaan bahasa Jawa yang baik dan benar sesuai
                  dengan konteks usia anak.
                </li>
                <li>
                  Kesesuaian Tema: Karya sesuai dengan tema yang ditentukan.
                </li>
                <li>
                  Orisinalitas: Karya harus asli dan bukan hasil plagiasi.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 basis-2/5">
          <div className="px-4">
            <img
              className="w-full rounded-xl h-fit"
              src={poster}
              alt="poster lomba"
            />
          </div>

          <Link
            className="block w-fit ml-auto mt-8 px-10 py-3 rounded-md bg-[#afa070] text-lg font-semibold"
            to={"/event/daftar"}
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </>
  );
};

export default Event;
