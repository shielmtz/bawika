import axios from "axios";
import Event from "../class/eventClass"; // Assuming this is a constructor function for Category

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const getEvents = async () => {
    try {
        const response = await axios.get(`${apiUrl}/events`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.events) {
            return response.data.events.map(event => new Event(event));
        }

        throw new Error("No event data found.");
    } catch (error) {
        console.error("Error fetching events:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch event");
    }
};

const getEventById = async (eventId) => {
    try {
        const response = await axios.get(`${apiUrl}/events/${eventId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response.data && response.data.event) {
            return new Event(response.data.event);
        }

        throw new Error("No event data found.");
    } catch (error) {
        console.error("Error fetching events:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch event");
    }
};

const createEvent = async (formData) => {
    try {
        const response = await axios.post(
            `${apiUrl}/events`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.event) {
            // Map response data ke dalam instance Event
            return new Event(response.data.event)
        }

        // Jika tidak ada data yang valid
        throw new Error("Data event tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Event by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data event."
        );
    }
};
const updateEvent = async (eventId, formData) => {
    try {
        const response = await axios.put(
            `${apiUrl}/events/${eventId}`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.event) {
            // Map response data ke dalam instance Event
            return new Event(response.data.event)
        }

        // Jika tidak ada data yang valid
        throw new Error("Data event tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Event by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data event."
        );
    }
};

const deleteEvent = async (eventId) => {
    try {
        const response = await axios.delete(`${apiUrl}/events/${eventId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message) {
            return response.data.message
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
}


const eventService = {
    getEvents,
    getEventById,
    createEvent,
    deleteEvent,
    updateEvent,
};

export default eventService;
