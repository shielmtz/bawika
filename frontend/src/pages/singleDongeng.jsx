import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Rekomendasi from "../components/rekomendasi";
import dongengService from "../service/dongengService";

const SingleDongeng = () => {
  const { id } = useParams(); // Ambil ID dari parameter URL
  const [dongengData, setDongengData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDongengById = async () => {
      try {
        const data = await dongengService.getDongengById(id);
        setDongengData(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchDongengById();
  }, [id]);

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

  if (error) {
    return (
      <>
        <Navbar />
        <div className="mt-16 text-center">
          <h1 className="mb-6 text-3xl font-bold text-stone-300">
            Dongeng Tidak Ditemukan
          </h1>
        </div>
      </>
    );
  }

  if (!dongengData) {
    return (
      <>
        <Navbar />
        <div className="mt-16 text-center">
          <h1 className="mb-6 text-lg font-semibold">Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container px-10 mx-auto my-10">
        {/* Judul Dongeng */}
        <h1 className="text-5xl text-center mb-8 font-bold">{dongengData.title}</h1>

        {/* Pemutaran Video Menggunakan VideoLink */}
        <div className="mx-16 my-8">
          {dongengData.videoLink && (
            <iframe
              src={dongengData.videoLink}
              title={dongengData.title}
              width="100%"
              height="500"
              allowFullScreen
              className="rounded-lg border-2"
            />
          )}
        </div>

        {/* Deskripsi Cerita */}
        <div className="w-full max-w-full px-0 prose prose-xl text-justify mb-8">
          <p>{dongengData.description}</p>
        </div>

        <Rekomendasi />
      </div>
    </>
  );
};

export default SingleDongeng;
