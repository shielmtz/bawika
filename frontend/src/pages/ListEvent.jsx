import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import eventService from "../service/eventService";
import { useEffect, useState } from "react";

export default function ListEvent() {
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await eventService.getEvents();
                setEventData(response);
            } catch (err) {
                console.error(err);
            }
        };

        fetchEvents();
    }, []);
    // Logika untuk menentukan warna latar belakang berdasarkan status
    const getStatusClass = (status) => {
        if (status === "Terbuka") return "bg-green-700";
        if (status === "Akan Datang") return "bg-orange-500";
        return "bg-red-500";
    };

    // Menggunakan di dalam komponen


    return (
        <>
            <Navbar />
            <div className="flex flex-col px-8 py-10">
                <h2 className="text-5xl font-medium">Event Lomba</h2>
                <p className="mt-4 font-medium">
                    Pada info event lomba, kami menyediakan berbagai macam lomba tentang
                    bahasa Jawa, sastra, dan masih banyak lomba lainnya yang bisa kalian ikuti!
                </p>
                <div className="mt-6 space-y-4 bg-white shadow-2xl">
                    {eventData.length > 0 ? (
                        eventData.map((event) => (
                            <div key={event.id} className="w-full p-6 relative border shadow-lg rounded-xl">
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-semibold text-black">{event.title}</h1>
                                    <p className="text-black mt-2">{event.description}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <strong className="text-gray-500">
                                        {event.startDate.toLocaleDateString("id-ID")} - {event.endDate.toLocaleDateString("id-ID")}
                                    </strong>
                                    <Link
                                        to={`/event/${event.id}`}
                                        className="text-blue-500 hover:underline font-medium"
                                    >
                                        Lihat Detail
                                    </Link>
                                </div>
                                <span
                                    className={`absolute top-6 right-10 py-2 px-4 border text-white rounded-lg shadow-xl ${getStatusClass(event.status)}`}
                                >
                                    {event.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Tidak ada event tersedia.</p>
                    )}
                </div>
            </div>
        </>
    );
}