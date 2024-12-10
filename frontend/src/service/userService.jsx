import axios from "axios";
import User from "../class/userClass";

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const getProfile = async () => {
    try {
        const response = await axios.get(`${apiUrl}/profile`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.user) {
            return new User(response.data.user) // Mapping each payment response to the Payment model
        } else {
            throw new Error("No User data found.");
        }
    } catch (error) {
        console.error("Failed to fetch User info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch User info");
    }
};
const getUsers = async () => {
    try {
        const response = await axios.get(`${apiUrl}/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.users) {
            return response.data.users.map(user => new User(user)); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No User data found.");
        }
    } catch (error) {
        console.error("Failed to fetch User info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch User info");
    }
};

const updateUser = async (formData) => {
    try {
        const response = await axios.put(
            `${apiUrl}/users`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response?.data?.user) {
            // Map response data ke dalam instance Event
            return new User(response.data.user)
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



const userService = {
    getUsers,
    getProfile,
    updateUser,
};

export default userService;
