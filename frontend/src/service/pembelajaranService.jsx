import axios from "axios";
import Pembelajaran from "../class/pembelajaranClass"; // Assuming this is a constructor function for Pembelajaran

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const getPembelajarans = async () => {
    try {
        const response = await axios.get(`${apiUrl}/pembelajarans`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.pembelajarans) {
            return response.data.pembelajarans.map(pembelajaran => new Pembelajaran(pembelajaran));
        }

        throw new Error("No pembelajaran data found.");
    } catch (error) {
        console.error("Error fetching videos:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch videos");
    }
};
const getPembelajaranById = async (pembelajaranId) => {
    try {
        const response = await axios.get(`${apiUrl}/pembelajarans/${pembelajaranId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response.data && response.data.pembelajaran) {
            return new Pembelajaran(response.data.pembelajaran);
        }

        throw new Error("Pembelajaran tidak ditemukan.");
    } catch (error) {
        console.error("Error fetching Pembelajaran by ID:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch Pembelajaran");
    }
};
const getPembelajaranCategoryById = async (categoryId) => {
    try {
        const response = await axios.get(
            `${apiUrl}/pembelajarans/category/${categoryId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.pembelajarans && Array.isArray(response.data.pembelajarans)) {
            // Map response data ke dalam instance Pembelajaran
            return response.data.pembelajarans.map(
                (item) => new Pembelajaran(item)
            );
        }

        // Jika tidak ada data yang valid
        throw new Error("Data pembelajaran tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Pembelajaran by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data pembelajaran."
        );
    }
};
const createMateri = async (formData) => {
    try {
        const response = await axios.post(
            `${apiUrl}/pembelajarans`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.pembelajaran) {
            // Map response data ke dalam instance Pembelajaran
            return new Pembelajaran(response.data.pembelajaran)
        }

        // Jika tidak ada data yang valid
        throw new Error("Data pembelajaran tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Pembelajaran by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data pembelajaran."
        );
    }
};
const updateMateri = async (materiId, formData) => {
    try {
        const response = await axios.put(
            `${apiUrl}/pembelajarans/${materiId}`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.pembelajaran) {
            // Map response data ke dalam instance Pembelajaran
            return new Pembelajaran(response.data.pembelajaran)
        }

        // Jika tidak ada data yang valid
        throw new Error("Data pembelajaran tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Pembelajaran by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data pembelajaran."
        );
    }
};

const deleteMateri = async (materiId) => {
    try {
        const response = await axios.delete(`${apiUrl}/pembelajarans/${materiId}`, {
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

const pembelajaranService = {
    getPembelajarans,
    getPembelajaranById,
    getPembelajaranCategoryById,
    createMateri,
    deleteMateri,
    updateMateri,
};

export default pembelajaranService;
