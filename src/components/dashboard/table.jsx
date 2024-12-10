import React from "react";

export default function Table({ data, onEdit, onDelete, setSongToDelete }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left">Cover</th>
            <th className="px-6 py-3 text-left">Artis</th>
            <th className="px-6 py-3 text-left">Lirik</th>
            <th className="px-6 py-3 text-left">Audio</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((song) => (
            <tr key={song.id} className="border-t">
              <td className="px-6 py-4">
                <img
                  src={song.cover}
                  alt={song.artis}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4">{song.artis}</td>
              <td className="px-6 py-4">{song.lirik}</td>
              <td className="px-6 py-4">
                <a
                  href={song.audio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Play Audio
                </a>
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => onEdit(song)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setSongToDelete(song);
                    onDelete();
                  }}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
