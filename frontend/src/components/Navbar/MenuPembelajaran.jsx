import { useLocation, useNavigate } from "react-router-dom";
import categoryService from "../../service/categoryService";
import { useEffect, useState } from "react";

export default function MenuPembelajaran() {
    const navigate = useNavigate();
    const location = useLocation();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await categoryService.getCategories();
                setCategories(response);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCategories();
    }, []);

    const isActive = (id) => {
        const currentPath = location.pathname;
        return currentPath === `/pembelajaran/category/${id}`;
    };

    return (
        <div className="flex justify-center gap-4 mb-6">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`px-4 py-2 border-2 font-bold rounded-full ${isActive(category.id) ? "bg-[#c9a763] text-white" : "bg-[#fff5da] text-[#333] hover:bg-[#c9a763] hover:text-white"}`}
                    onClick={() => navigate(`/pembelajaran/category/${category.id}`)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}
