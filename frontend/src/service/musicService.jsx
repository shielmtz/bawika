import axios from "axios";
import Music from "../class/musicClass"; // Assuming this is a constructor function for Category

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const getMusics = async () => {
    try {
        const response = await axios.get(`${apiUrl}/musics`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.musics) {
            return response.data.musics.map(music => new Music(music));
        }

        throw new Error("No music data found.");
    } catch (error) {
        console.error("Error fetching musics:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch music");
    }
};

const getMusicById = async (musicId) => {
    try {
        const response = await axios.get(`${apiUrl}/musics/${musicId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response.data && response.data.music) {
            return new Music(response.data.music);
        }

        throw new Error("No music data found.");
    } catch (error) {
        console.error("Error fetching musics:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch music");
    }
};

const createMusic = async (formData) => {
    try {
        const response = await axios.post(
            `${apiUrl}/musics`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.music) {
            // Map response data ke dalam instance Music
            return new Music(response.data.music)
        }

        // Jika tidak ada data yang valid
        throw new Error("Data music tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Music by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data music."
        );
    }
};
const updateMusic = async (materiId, formData) => {
    try {
        const response = await axios.put(
            `${apiUrl}/musics/${materiId}`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.music) {
            // Map response data ke dalam instance Music
            return new Music(response.data.music)
        }

        // Jika tidak ada data yang valid
        throw new Error("Data music tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Music by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data music."
        );
    }
};

const deleteMusic = async (materiId) => {
    try {
        const response = await axios.delete(`${apiUrl}/musics/${materiId}`, {
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


const musicService = {
    getMusics,
    getMusicById,
    createMusic,
    deleteMusic,
    updateMusic,
};

export default musicService;
