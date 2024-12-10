import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import dongengService from "../service/dongengService";
import { useEffect, useState } from "react";

const Rekomendasi = () => {
  const [dongengData, setDongengData] = useState([]);

  // Ambil data dari API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await dongengService.getDongengs();
        setDongengData(response);
        console.log(dongengData) // Mengatur data yang diambil ke dalam state
      } catch (err) {
        console.error(err);
      }
    };

    fetchVideos();
  }, []);

  const getThumbnailUrl = (url) => {
    if (!url) return null;

    // Jika URL adalah format youtube short link
    const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/0.jpg`;
    }

    // Jika URL sudah dalam embed format, langsung kembalikan sebagai valid
    const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
    if (embedMatch && embedMatch[1]) {
      return `https://img.youtube.com/vi/${embedMatch[1]}/0.jpg`;
    }

    return null;
  };

  const handleToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center">Rekomendasi</h3>
        <div className="grid grid-cols-3 mt-8">
          {dongengData.length > 0 ? (
            dongengData.slice(0, 3).map((item, index) => (
              <div key={index} className="px-3 text-center">
                <Link
                  onClick={handleToTop}
                  to={`/dongeng/${item.id}`}>
                  <div className="relative group">
                    <img
                      src={getThumbnailUrl(item.thumbnailLink)}
                      alt={item.title}
                      className="object-cover w-full rounded-xl h-72 transition-transform transform group-hover:scale-105"
                    />
                    <FaRegCirclePlay className="absolute inset-0 m-auto text-white size-14 transition-opacity opacity-0 group-hover:opacity-100" />
                  </div>
                  <h4 className="mt-4 text-2xl font-bold">{item.title}</h4>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Rekomendasi;
