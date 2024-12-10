import axios from "axios";
import Dongeng from "../class/dongengClass"; // Assuming this is a constructor function for Dongeng

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const getDongengs = async () => {
    try {
        const response = await axios.get(`${apiUrl}/dongengs`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.dongengs) {
            return response.data.dongengs.map(dongeng => new Dongeng(dongeng));
        }

        throw new Error("No dongeng data found.");
    } catch (error) {
        console.error("Error fetching videos:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch videos");
    }
};
const getDongengById = async (dongengId) => {
    try {
        const response = await axios.get(`${apiUrl}/dongengs/${dongengId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.dongeng) {
            return new Dongeng(response?.data?.dongeng);
        }

        throw new Error("Dongeng tidak ditemukan.");
    } catch (error) {
        console.error("Error fetching Dongeng by ID:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch Dongeng");
    }
};

const createDongeng = async (formData) => {
    try {
        const response = await axios.post(
            `${apiUrl}/dongengs`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.dongeng) {
            // Map response data ke dalam instance Dongeng
            return new Dongeng(response.data.dongeng)
        }

        // Jika tidak ada data yang valid
        throw new Error("Data dongeng tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Dongeng by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data dongeng."
        );
    }
};
const updateDongeng = async (materiId, formData) => {
    try {
        const response = await axios.put(
            `${apiUrl}/dongengs/${materiId}`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response.data && response.data.message && response.data.video) {
            // Map response data ke dalam instance Dongeng
            return new Dongeng(response.data.video)
        }

        // Jika tidak ada data yang valid
        throw new Error("Data dongeng tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Dongeng by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data dongeng."
        );
    }
};

const deleteDongeng = async (materiId) => {
    try {
        const response = await axios.delete(`${apiUrl}/dongengs/${materiId}`, {
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

const dongengService = {
    getDongengs,
    getDongengById,
    createDongeng,
    deleteDongeng,
    updateDongeng,
};

export default dongengService;
