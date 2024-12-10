import axios from "axios";

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const createPeserta = async (formData) => {
    try {
        const response = await axios.post(
            `${apiUrl}/pesertas`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        // Validasi data dari server
        if (response.data && response.data.message && response.data.peserta) {
            return response.data.message
        }

        // Jika tidak ada data yang valid
        throw new Error("Data peserta tidak ditemukan.");
    } catch (error) {
        console.error(
            "Error fetching Music by ID:",
            error.message || error
        );

        // Mengembalikan error dengan pesan yang dapat digunakan di UI
        throw new Error(
            error.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data peserta."
        );
    }
};



const pesertaService = {
    createPeserta,
};

export default pesertaService;
