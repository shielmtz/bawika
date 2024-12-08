import React, { useState } from "react";
import Table from "../components/dashboard/table";
import Modal from "../components/dashboard/modal";
import DeleteConfirmation from "../components/dashboard/deleteconfirmasi";
import cublaksuweng from "../assets/cubleksuweng.png";
import gambangsuling from "../assets/gambangsuling.png";
import gundulpacul from "../assets/gundulpacul.png";
import menthok from "../assets/menthok.png";
import CublakCublakSuweng from "../assets/music/Cublak Cublak Suweng.mp3";
import GundulPacul from "../assets/music/gundul pacul.mp3";
import Gambangsuling from "../assets/music/gambang suling.mp3";
import Menthok from "../assets/music/menthok.mp3";

// Data Tembang Jawa
const defaultData = [
  {
    id: 1,
    title: "Cublak Cublak Suweng",
    artist: "Syekh Maulana Ainul Yakin",
    src: CublakCublakSuweng,
    cover: cublaksuweng,
    lyrics: `Cublak-cublak suweng. Suwengé ting gelèntèr. Mambu ketundung gudhèl. Pak empo lirak-lirik. Sopo ngguyu ndelikaké. Sir sir pong delé kopong. Sir sir pong delé kopong.`,
  },
  {
    id: 2,
    title: "Gundul Pacul",
    artist: "Raden Cajetanus Hardjosoebroto",
    src: GundulPacul,
    cover: gundulpacul,
    lyrics: `Gundul-gundul pacul cul gembelengan. Nyunggi-nyunggi wakul kul gembelengan. Wakul ngglimpang segane dadi sak ratan. Wakul ngglimpang segane dadi sak ratan.`,
  },
  {
    id: 3,
    title: "Gambang Suling",
    artist: "Ki Narto Sabdo",
    src: Gambangsuling,
    cover: gambangsuling,
    lyrics: `Gambang suling. Ngumandang suarane. Tulat tulit kepenak unine. Unine mung nrenyuhake. Bareng ian kentung. Ketipung suling. Sigrak Kendangane.`,
  },
  {
    id: 4,
    title: "Menthok Menthok",
    artist: "RC Hardjasoebrata",
    src: Menthok,
    cover: menthok,
    lyrics: `Menthok, menthok tak kandhani. Mung lakumu angisin isini. Mbok ya aja ngetok ana. Kandhang wae. Enak enak ngorok ora nyambut gawe. Menthok, menthok mung lakumu. Megal megol gawe guyu.`,
  },
];

function TembangJawaDashboard() {
  const [data, setData] = useState(defaultData); // State diinisialisasi dengan data Tembang Jawa
  const [currentSong, setCurrentSong] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  // Modal Handlers
  const openModal = (song = null) => {
    setCurrentSong(song);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentSong(null);
  };

  // Handle Save (Create or Edit)
  const handleSave = (song) => {
    if (currentSong) {
      // Edit
      setData(
        data.map((item) =>
          item.id === currentSong.id ? { ...song, id: item.id } : item
        )
      );
    } else {
      // Create
      setData([...data, { ...song, id: Date.now() }]);
    }
    closeModal();
  };

  // Handle Delete
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    setDeleteOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tembang Jawa CRUD</h1>
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          + Add Tembang
        </button>
      </header>

      {/* Table Component */}
      <Table
        data={data}
        onEdit={openModal}
        onDelete={() => setDeleteOpen(true)}
        setSongToDelete={setCurrentSong}
      />

      {/* Modal for Create/Edit */}
      {isModalOpen && (
        <Modal song={currentSong} onSave={handleSave} onClose={closeModal} />
      )}

      {/* Delete Confirmation */}
      {isDeleteOpen && (
        <DeleteConfirmation
          onDelete={() => handleDelete(currentSong.id)}
          onCancel={() => setDeleteOpen(false)}
        />
      )}
    </div>
  );
}

export default TembangJawaDashboard;
