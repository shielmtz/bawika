import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import MenuPembelajaran from "../components/Navbar/MenuPembelajaran";
import pembelajaranService from "../service/pembelajaranService";
import { useEffect, useState } from "react";

const MateriPembelajaran1 = () => {
  const { id } = useParams();
  const [materiData, setMateriData] = useState([]); // Ubah default state menjadi array kosong untuk menghindari error saat mapping
  const [isLoading, setIsLoading] = useState(true); // Untuk menangani kondisi loading
  const navigate = useNavigate();

  // Ambil data dari API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await pembelajaranService.getPembelajaranCategoryById(id);
        // Validasi data jika response valid
        if (response && Array.isArray(response)) {
          setMateriData(response);
          console.log(response)
        }
      } catch (err) {
        console.error("Gagal mengambil materi pembelajaran:", err.message);
      } finally {
        setIsLoading(false); // Menghentikan loading setelah permintaan selesai
      }
    };

    fetchVideos();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <main className="text-center p-6">
          <h1 className="text-2xl font-bold text-[#333] mb-6">Materi Pembelajaran</h1>

          {/* Button Group */}
          <MenuPembelajaran />

          {/* Materi Cards */}
          {isLoading ? (
            <p className="text-[#555] text-lg">Memuat materi pembelajaran...</p>
          ) : materiData.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {materiData.map((materi) => (
                <div
                  key={materi.id} // Gunakan ID sebagai key unik
                  className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform cursor-pointer"
                  onClick={() => navigate(`/pembelajaran/${materi.id}`)} // Navigasi berdasarkan ID
                >
                  <img
                    src={materi.imagePath ? `${materi.imagePath}` : `/images/pembelajaran/mantenan.png`} // Gunakan method untuk mendapatkan URL gambar
                    alt={materi.title}
                    className="w-full h-44 object-cover"
                  />
                  <p className="text-lg font-bold text-[#333] p-4">{materi.title}</p>
                  <p className="text-justify text-sm text-[#555] px-4 pb-4">
                    {materi.getDescriptionPreview()} {/* Gunakan metode untuk mempersingkat deskripsi */}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#555] text-lg">Belum ada materi untuk kategori ini</p>
          )}
        </main>
      </div>
    </>
  );
};

export default MateriPembelajaran1;
