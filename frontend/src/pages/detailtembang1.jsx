import { useState, useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import musicService from "../service/musicService";
import { useParams } from "react-router-dom";

const TembangPlayer = () => {
  const { id } = useParams(); // ID dari URL
  const [musicData, setMusicData] = useState(null); // Data lagu
  const [isLoading, setIsLoading] = useState(true); // Untuk kondisi loading
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await musicService.getMusicById(id); // Ambil data berdasarkan ID
        setMusicData(response);
        console.log(response) // Set data ke state
      } catch (err) {
        console.error("Gagal mengambil data musik:", err.message);
      } finally {
        setIsLoading(false); // Hentikan loading setelah selesai
      }
    };

    fetchMusic();
  }, [id]);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkip = (musikId) => {

  }

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </>
    );
  }

  if (!musicData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">Lagu tidak ditemukan.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[rgba(255,252,242,1)] flex flex-col items-center">
        {/* Player Content */}
        <div className="flex flex-col lg:flex-row gap-6 w-10/12 mt-6">
          {/* Lyrics Section */}
          <div className="flex-1 bg-[#fee799] p-6 rounded-lg shadow-md">
            <div className="flex-1 text-[15px] bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={`/music/${musicData.imagePath}`} // Ganti dengan path server Anda
                  alt="Album cover"
                  className="w-32 h-32 rounded-lg shadow-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{musicData.title}</h2>
                  <p className="text-gray-600">{musicData.pencipta}</p>
                </div>
              </div>
              <div className="overflow-hidden h-40">
                <p className="text-gray-700 text-justify">{musicData.description}</p>
              </div>
            </div>
          </div>
          {/* Player Section */}
          <div className="flex-1 bg-[#fee799] py-[50px] mx-[50px] rounded-lg shadow-md flex flex-col items-center">
            <img
              src={`/music/${musicData.imagePath}`} // Ganti dengan path server Anda
              alt="Album cover"
              className="w-36 h-36 rounded-lg shadow-md mb-4"
            />
            <h2 className="text-lg font-semibold">{musicData.title}</h2>
            <p className="text-gray-600">{musicData.pencipta}</p>

            <audio ref={audioRef} src={`/music/${musicData.musicPath}`}></audio>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                className="w-12 h-12 bg-white text-white rounded-full shadow-md flex items-center justify-center"
                onClick={playPauseHandler}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button
                className="w-12 h-12 bg-white bg-[#fee799] text-white rounded-full shadow-md flex items-center justify-center"
                onClick={handleSkip(musicData.id + 1)}
              >
                ⏭
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TembangPlayer;
