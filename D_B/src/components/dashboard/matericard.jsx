import React from "react";

const MaterialCard = ({ material, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={material.image}
        alt={material.title}
        className="rounded-md w-full h-40 object-cover"
      />
      <h3 className="mt-4 text-lg font-bold text-gray-800">{material.title}</h3>
      <p className="text-gray-600 mb-4">{material.category}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onEdit(material.id)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(material.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default MaterialCard;
