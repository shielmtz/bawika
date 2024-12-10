import React, { useState } from "react";

export default function Modal({ song, onSave, onClose }) {
  const [cover, setCover] = useState(song ? song.cover : "");
  const [artis, setArtis] = useState(song ? song.artis : "");
  const [lirik, setLirik] = useState(song ? song.lirik : "");
  const [audio, setAudio] = useState(song ? song.audio : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ cover, artis, lirik, audio });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {song ? "Edit Song" : "Add Song"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Cover URL</label>
            <input
              type="text"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter cover URL"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Artis</label>
            <input
              type="text"
              value={artis}
              onChange={(e) => setArtis(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter artist name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Lirik</label>
            <textarea
              value={lirik}
              onChange={(e) => setLirik(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter lyrics"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Audio URL</label>
            <input
              type="text"
              value={audio}
              onChange={(e) => setAudio(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter audio URL"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
