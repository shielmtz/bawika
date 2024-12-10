import { Link, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import eventService from "../service/eventService";
import { useEffect, useState } from "react";

const DetailEvent = () => {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);
    const [error, setError] = useState(null);

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

    const getStatusClass = (status) => {
        if (status === "Terbuka") return "bg-green-700";
        if (status === "Akan Datang") return "bg-orange-500";
        return "bg-red-500";
    };

    if (error) {
        return (
            <>
                <Navbar />
                <div className="p-10 text-center text-red-500">
                    <h2 className="text-2xl font-semibold">Terjadi kesalahan</h2>
                    <p>{error}</p>
                </div>
            </>
        );
    }

    if (!eventData) {
        return (
            <>
                <Navbar />
                <div className="p-10 text-center text-gray-500">
                    <h2 className="text-2xl font-semibold">Memuat data...</h2>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="p-10 flex flex-col lg:flex-row gap-10">

                <div className="flex-1 relative">
                    <div className="flex flex-col p-8 border shadow-xl rounded-xl">
                        <h2 className="text-3xl font-medium mb-4">{eventData.title}</h2>
                        <p className="text-lg font-medium text-gray-700 mb-6">{eventData.description}</p>
                        <p className="text-sm font-semibold text-gray-500 text-end mb-8">
                            {new Date(eventData.startDate).toLocaleDateString("id-ID")} - {new Date(eventData.endDate).toLocaleDateString("id-ID")}
                        </p>
                        <Link
                            className="block w-fit ml-auto px-10 py-3 text-white rounded-md bg-[#afa070] text-lg font-semibold"
                            to={`/event/daftar/${id}`}
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                    <span
                        className={`absolute top-2 right-10 px-4 py-2 border text-white rounded-lg shadow-xl ${getStatusClass(eventData.status)}`}
                    >
                        {eventData.status}
                    </span>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        className="w-full max-w-lg rounded-xl object-cover"
                        src={eventData.imagePath}
                        alt={`Poster ${eventData.title}`}
                    />
                </div>
            </div>
        </>
    );
};

export default DetailEvent;