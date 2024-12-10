import React from "react";

export default function Table({ data, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left">Cover</th>
            <th className="px-6 py-3 text-left">Artis</th>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-left">Deskripsi</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((song) => (
              <tr key={song.id} className="border-t">
                <td className="px-6 py-4">
                  <img
                    src={song.imagePath ? `/music/${song.imagePath}` : 'https://via.placeholder.com/150'}
                    alt={song.title || 'Cover Image'}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{song.pencipta}</td>
                <td className="px-6 py-4">{song.title}</td>
                <td className="px-6 py-4">{song.description}</td>
                <td className="px-6 py-4 flex justify-center space-x-2">
                  <button
                    onClick={() => onEdit(song)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(song.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}