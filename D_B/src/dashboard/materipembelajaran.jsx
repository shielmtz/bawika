import React, { useState } from "react";
import MaterialCard from "../components/dashboard/matericard";
import Sidebar from "../components/dashboard/sidebar";
import { FiMenu } from "react-icons/fi"; 


const MateriDashboard = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "Ande-Ande Lumut",
      category: "Upacara Mantenan",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Bawang Merah dan Bawang Putih",
      category: "Sekaten",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Dongeng Sangkuriang",
      category: "Selametan",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    category: "",
    image: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add new material
  const handleAddMaterial = () => {
    setMaterials([
      ...materials,
      {
        ...form,
        id: materials.length + 1,
        image: "https://via.placeholder.com/150",
      },
    ]);
    setForm({ id: null, title: "", category: "", image: "" });
  };

  // Edit existing material
  const handleEditMaterial = (id) => {
    const material = materials.find((mat) => mat.id === id);
    setForm(material);
    setIsEditing(true);
  };

  const handleUpdateMaterial = () => {
    setMaterials(
      materials.map((mat) =>
        mat.id === form.id
          ? { ...mat, title: form.title, category: form.category }
          : mat
      )
    );
    setForm({ id: null, title: "", category: "", image: "" });
    setIsEditing(false);
  };

  // Delete material
  const handleDeleteMaterial = (id) => {
    setMaterials(materials.filter((mat) => mat.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Sidebar */}
        <Sidebar />
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Materi Pembelajaran
          </h1>
        </header>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-bold text-gray-700 mb-4">
            {isEditing ? "Edit Materi" : "Tambah Materi"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Judul Materi"
              value={form.title}
              onChange={handleChange}
              className="border rounded-lg p-2"
            />
            <input
              type="text"
              name="category"
              placeholder="Kategori"
              value={form.category}
              onChange={handleChange}
              className="border rounded-lg p-2"
            />
          </div>
          <div className="mt-4">
            {isEditing ? (
              <button
                onClick={handleUpdateMaterial}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
            ) : (
              <button
                onClick={handleAddMaterial}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Tambah
              </button>
            )}
          </div>
        </div>

        {/* Material Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onEdit={handleEditMaterial}
              onDelete={handleDeleteMaterial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MateriDashboard;
