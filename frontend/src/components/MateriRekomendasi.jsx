import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pembelajaranService from "../service/pembelajaranService";

const MateriRekomendasi = ({ categoryId }) => {
    const [materiData, setMateriData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMateriRekomendasi = async () => {
            try {
                const response = await pembelajaranService.getPembelajaranCategoryById(categoryId);
                if (response && Array.isArray(response)) {
                    setMateriData(response);
                    console.log(response);
                }
            } catch (err) {
                console.error("Gagal mengambil materi rekomendasi:", err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (categoryId) fetchMateriRekomendasi();
    }, [categoryId]);

    const handleToTop = () => {
        window.location(0, 0)
    }

    return (
        <section className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Rekomendasi</h2>
            {isLoading ? (
                <div className="text-gray-500 mt-4">Memuat rekomendasi...</div>
            ) : (
                <div className="grid grid-cols-3 mt-8 gap-8">
                    {materiData.length > 0 ? (
                        materiData.map((item) => (
                            <Link
                                onClick={handleToTop}
                                to={`/pembelajaran/${item.id}`}
                                key={item.id}
                                className=" relative group"
                            >
                                <img
                                    src={item.imagePath ? `${item.imagePath}` : ''}
                                    alt={item.title}
                                    className="object-cover w-full rounded-xl h-72 transition-transform transform group-hover:scale-105"
                                />
                                <p className="mt-4 text-gray-700 font-bold">{item.title}</p>
                            </Link>
                        ))
                    ) : (
                        <div className="text-gray-500">Belum ada rekomendasi yang tersedia.</div>
                    )}
                </div>
            )}
        </section>
    );
};

export default MateriRekomendasi;
