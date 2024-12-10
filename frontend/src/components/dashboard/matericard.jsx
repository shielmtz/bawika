import React from "react";

const MaterialCard = ({ material, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Tampilkan gambar jika ada */}
      {material.imagePath ? (
        <img
          src={material.imagePath}
          alt={material.title}
          className="rounded-md w-full h-40 object-cover"
        />
      ) : (
        <div className="bg-gray-200 rounded-md w-full h-40 flex items-center justify-center text-gray-500">
          Gambar Tidak Tersedia
        </div>
      )}

      {/* Judul Materi */}
      <h3 className="mt-4 text-lg font-bold text-gray-800">{material.title}</h3>

      {/* Deskripsi Materi */}
      <p className="text-gray-600 mb-2 line-clamp-2">{material.description}</p>


      {/* Tombol Edit & Delete */}
      <div className="flex justify-between space-x-2">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default MaterialCard;
