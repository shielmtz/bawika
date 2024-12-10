import { useEffect, useState } from "react";
import MaterialCard from "../components/dashboard/matericard";
import Sidebar from "../components/dashboard/sidebar";
import pembelajaranService from "../service/pembelajaranService";
import categoryService from "../service/categoryService";
import Swal from "sweetalert2";

const MateriPembelajaran = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [materiData, setMateriData] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        pdf_link: "",
        image_path: null,
        category_id: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await categoryService.getCategories();
                setCategoryData(response);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchMateries = async () => {
            try {
                const materies = await pembelajaranService.getPembelajarans();
                setMateriData(materies);
                console.log(materies);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMateries();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formToSubmit = new FormData();
        Object.keys(formData).forEach((key) => {
            formToSubmit.append(key, formData[key]);
        });

        try {
            if (isEditing) {
                await pembelajaranService.updateMateri(editId, formToSubmit);
                Swal.fire("Berhasil!", "Materi berhasil diperbarui.", "success");
            } else {
                await pembelajaranService.createMateri(formToSubmit);
                Swal.fire("Berhasil!", "Materi berhasil ditambahkan.", "success");
            }

            const materies = await pembelajaranService.getPembelajarans();
            setMateriData(materies);
            resetForm();
        } catch (error) {
            Swal.fire("Gagal!", error.message || "Terjadi kesalahan saat menyimpan materi.", "error");
        }
    };

    const handleEditMaterial = (material) => {
        console.log(material)
        setFormData({
            title: material.title,
            description: material.description,
            pdf_link: material.pdf_link,
            image_path: null, // File upload tidak bisa diisi ulang
            category_id: material.category_id, // Pastikan ID kategori sesuai
        });
        setIsEditing(true);
        setEditId(material.id);
    };


    const handleDeleteMaterial = async (id) => {
        try {
            await pembelajaranService.deleteMateri(id);
            Swal.fire("Berhasil!", "Materi berhasil dihapus.", "success");
            const materies = await pembelajaranService.getPembelajarans();
            setMateriData(materies);
        } catch (error) {
            Swal.fire("Gagal!", error.message || "Terjadi kesalahan saat menghapus materi.", "error");
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            pdf_link: "",
            image_path: null,
            category_id: "",
        });
        setIsEditing(false);
        setEditId(null);
    };

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} title={'Materi Pembelajaran'} />
            <div className="min-h-screen bg-gray-100 p-6">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Materi Pembelajaran</h1>
                </header>

                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-lg font-bold text-gray-700 mb-4">
                        {isEditing ? "Edit Materi" : "Tambah Materi"}
                    </h2>
                    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Judul Materi"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="border rounded-lg p-2"
                            required
                        />
                        <textarea
                            name="description"
                            placeholder="Deskripsi Materi"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="border rounded-lg p-2"
                            required
                        />
                        <input
                            type="text"
                            name="pdf_link"
                            placeholder="Link PDF"
                            value={formData.pdf_link}
                            onChange={handleInputChange}
                            className="border rounded-lg p-2"
                        />
                        <select
                            name="category_id"
                            value={formData.category_id}
                            onChange={handleInputChange}
                            className="border rounded-lg p-2"
                            required
                        >
                            <option value="">Pilih Kategori</option>
                            {categoryData.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <input
                            type="file"
                            name="image_path"
                            accept="image/*"
                            onChange={handleInputChange}
                            className="border rounded-lg p-2"
                        />
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className={`px-4 py-2 rounded-lg text-white ${isEditing ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}
                            >
                                {isEditing ? "Update" : "Tambah"}
                            </button>
                            {isEditing && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                >
                                    Batal
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materiData.map((material) => (
                        <MaterialCard
                            key={material.id}
                            material={material}
                            onEdit={() => handleEditMaterial(material)}
                            onDelete={() => handleDeleteMaterial(material.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MateriPembelajaran;