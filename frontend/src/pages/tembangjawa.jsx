import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "@fontsource/poppins";
import { useEffect, useState } from "react";
import musicService from "../service/musicService";

const TembangJawa = () => {
  const [musicData, setMusicData] = useState([]);
  const navigate = useNavigate();

  // Ambil data dari API
  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await musicService.getMusics();
        setMusicData(response); // Pastikan ini sesuai struktur response API Anda
      } catch (err) {
        console.error(err);
      }
    };

    fetchMusics();
  }, []);

  const handleClick = (id) => {
    navigate(`/tembangjawa/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="bg-yellow-50 p-6 font-Poppins">
        <h1 className="text-3xl py-7 font-bold text-[45px] text-gray-700 pl-20 mb-6">
          Tembang Jawa
        </h1>
        <div className="space-y-4 max-w-4xl mx-auto rounded-t-10">
          {musicData.length > 0 ? (
            musicData.map((tembang) => (
              <div
                key={tembang.id}
                className="flex items-center justify-between bg-[#fee799] p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleClick(tembang.id)}
              >
                <p className="text-lg font-semibold text-gray-700">
                  {tembang.title}
                </p>
                <img
                  src={`/music/${tembang.imagePath}`} // Sesuaikan dengan path server Anda
                  alt={tembang.title}
                  className="w-20 h-22 rounded-md object-cover"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">Tidak ada data tersedia.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TembangJawa;
