import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/sidebar";
import { useParams } from "react-router-dom";
import eventService from "../service/eventService";

export default function PesertaDashboard() {
    const { id } = useParams();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [eventData, setEventData] = useState(null);
    const [error, setError] = useState(null);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        const fetchEventById = async () => {
            try {
                const data = await eventService.getEventById(id);
                setEventData(data);
                setError(null);
            } catch (error) {
                console.error(error);
                setError(error.message);
            }
        };

        fetchEventById();
    }, [id]);

    const handleLihatBukti = (bukti) => {
        setModalImage(bukti);
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    const getStatusClass = (status) => {
        if (status === "Terbuka") return "bg-green-700";
        if (status === "Akan Datang") return "bg-orange-500";
        return "bg-red-500";
    };

    const formatDate = (dateString) => {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    if (error) {
        return <div className="min-h-screen bg-gray-100 p-6">Error: {error}</div>;
    }

    if (!eventData) {
        return <div className="min-h-screen bg-gray-100 p-6">Loading...</div>;
    }

    return (
        <>
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                title={'Materi Pembelajaran'}
            />
            <div className="min-h-screen bg-gray-100 p-6 my-20">
                {/* Event Information */}
                <div className="bg-white shadow-md rounded p-4 mb-6">
                    <h1 className="text-2xl font-bold mb-2 text-center">{eventData.title}</h1>
                    <p className="text-gray-700 mb-2">{eventData.description}</p>
                    <p className="text-gray-500">Tanggal Mulai: {formatDate(eventData.startDate)}</p>
                    <p className="text-gray-500">Tanggal Berakhir: {formatDate(eventData.endDate)}</p>
                    <div className="flex mt-2 space-x-2 items-center">
                        <p className={`text-white px-4 py-2 font-semibold rounded-lg  ${getStatusClass(eventData.status)}`}>Status: {eventData.status}</p>
                    </div>
                    <p className="text-xl mt-3">Jumlah Peserta: {eventData.pesertas?.length || 0}</p>
                </div>

                {/* Participants Table */}
                <div className="bg-white shadow-md rounded p-4">
                    <h2 className="text-xl font-bold mb-4">Daftar Peserta</h2>
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">No</th>
                                <th className="border px-4 py-2">Nama</th>
                                <th className="border px-4 py-2">Tempat, Tanggal Lahir</th>
                                <th className="border px-4 py-2">Alamat</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">No. Handphone</th>
                                <th className="border px-4 py-2">Bukti</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventData.pesertas.map((peserta, index) => (
                                <tr key={peserta.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-4 py-2">{peserta.name}</td>
                                    <td className="border px-4 py-2">{peserta.ttl}</td>
                                    <td className="border px-4 py-2">{peserta.alamat}</td>
                                    <td className="border px-4 py-2">{peserta.email}</td>
                                    <td className="border px-4 py-2">{peserta.noHandphone}</td>
                                    <td className="border px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleLihatBukti(peserta)}
                                            className="text-blue-500 underline "
                                        >Lihat Bukti</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {modalImage && (
                <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50">
                    <div className="bg-white px-20 py-4 shadow-md  rounded-xl text-center space-y-3 flex flex-col items-center">
                        <img src={modalImage.imagePath} alt="Bukti" className="justify-center w-auto h-[400px] object-fill hover:scale-125 transform duration-700" />
                        <p className="font-semibold text-xl font-poppins">{modalImage.name}</p>
                        <div className="mb-6">
                            <p className="  font-poppins">{modalImage.email}</p>
                            <p className="  font-poppins">{modalImage.noHandphone}</p>
                        </div>
                        <div className="pt-5">
                            <button
                                onClick={handleCloseModal}
                                className="mt- px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                            >Tutup</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
