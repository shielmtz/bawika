import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import pembelajaranService from "../service/pembelajaranService";
import { useParams } from "react-router-dom";
import MateriRekomendasi from "../components/MateriRekomendasi";

const DetailPembelajaran = () => {
  const { id } = useParams();
  const [materiData, setMateriData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        const response = await pembelajaranService.getPembelajaranById(id);
        if (response) {
          setMateriData(response);
          console.log(response);
        }
      } catch (err) {
        console.error("Gagal mengambil materi pembelajaran:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMateri();
  }, [id]);

  const chunkTextIntoParagraphs = (text, sentencesPerParagraph = 5) => {
    // Gunakan regex untuk memecah teks menjadi kalimat berdasarkan tanda titik
    const sentences = text?.split(/(?<=[.!?])\s+/) || [];
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
      paragraphs.push(sentences.slice(i, i + sentencesPerParagraph).join(' '));
    }

    return paragraphs;
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#fdfcf0] min-h-screen px-36 py-6">
        {isLoading ? (
          <div className="text-center text-gray-700 mt-12">Loading...</div>
        ) : (
          <>
            <section className="text-center ">
              <h1 className="text-4xl font-bold text-gray-800 font-poppins">{materiData?.title}</h1>
              <div className="mt-8">
                <img
                  src={materiData?.imagePath ? `${materiData?.imagePath}` : `/image/mantenan.png`}
                  alt={materiData?.title}
                  className="mx-auto w-full max-w-lg"
                />
              </div>
            </section>

            <article className="mt-8 mx-auto text-justify text-gray-700 leading-7">
              {chunkTextIntoParagraphs(materiData?.description).map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </article>



            {materiData?.pdf_link ? (
              <div className="text-center mt-8">
                <a
                  href={materiData.pdf_link}
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Baca Selengkapnya
                </a>
              </div>
            ) : (
              <div className="text-center mt-8 text-gray-500">Tidak ada materi PDF tambahan.</div>
            )}

            {/* Kirim categoryId ke MateriRekomendasi */}
            {materiData?.categoryId && (
              <MateriRekomendasi categoryId={materiData.categoryId} />
            )}
          </>
        )}
      </main>
    </>
  );
};

export default DetailPembelajaran;
