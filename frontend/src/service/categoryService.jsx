import axios from "axios";
import Category from "../class/categoryClass"; // Assuming this is a constructor function for Category

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const getCategories = async () => {
    try {
        const response = await axios.get(`${apiUrl}/categories`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.categories) {
            return response.data.categories.map(category => new Category(category));
        }

        throw new Error("No category data found.");
    } catch (error) {
        console.error("Error fetching categories:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch videos");
    }
};


const categoryService = {
    getCategories,

};

export default categoryService;
