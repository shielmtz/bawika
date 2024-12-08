import React, { useState, useRef } from "react";
import Navbar from "../components/navbar";
import cublaksuweng from "../assets/cubleksuweng.png";
import gambangsuling from "../assets/gambangsuling.png";
import gundulpacul from "../assets/gundulpacul.png";
import menthok from "../assets/menthok.png";
import CublakCublakSuweng from "../assets/music/Cublak Cublak Suweng.mp3";
import GundulPacul from "../assets/music/gundul pacul.mp3";
import Gambangsuling from "../assets/music/gambang suling.mp3";
import Menthok from "../assets/music/menthok.mp3";

const songsData = [
  {
    id: 3,
    title: "Gambang Suling",
    artist: "Ki Narto Sabdo",
    src: Gambangsuling,
    cover: gambangsuling,
    lyrics: `Gambang suling. 
    ngumandang suarane.
Tulat tulit kepenak unine.
Unine mung nrenyuhake. 
bareng ian kentung.
Ketipung suling.
Sigrak Kendangane.`,
  },
  {
    id: 4,
    title: "Menthok Menthok",
    artist: "RC Hardjasoebrata",
    src: Menthok,
    cover: menthok,
    lyrics: `Menthok, menthok tak kandhani.
Mung lakumu angisin isini.
Mbok ya aja ngetok ana.
kandhang wae.
Enak enak ngorok ora nyambut gawe.
Menthok, menthok mung lakumu.
Megal megol gawe guyu.`,
  },
  {
    id: 2,
    title: "Gundul Pacul",
    artist: "Raden Cajetanus Hardjosoebroto",
    src: GundulPacul,
    cover: gundulpacul,
    lyrics: `Gundul-gundul pacul cul gembelengan. 
    Nyunggi-nyunggi wakul kul gembelengan. 
    Wakul ngglimpang segane dadi sak ratan. 
    Wakul ngglimpang segane dadi sak ratan.`,
  },

  {
    id: 1,
    title: "Cublak Cublak Suweng",
    artist: "Syekh Maulana Ainul Yakin",
    src: CublakCublakSuweng,
    cover: cublaksuweng,
    lyrics: `Cublak-cublak suweng.
    Suwengé ting gelèntèr.
    Mambu ketundung gudhèl.
    Pak empo lirak-lirik.
    Sopo ngguyu ndelikaké.
    Sir sir pong delé kopong.
    Sir sir pong delé kopong.`,
  },
];

const TembangPlayer3 = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipHandler = (direction) => {
    let newIndex = currentSongIndex + direction;
    if (newIndex < 0) newIndex = songsData.length - 1;
    if (newIndex >= songsData.length) newIndex = 0;
    setCurrentSongIndex(newIndex);
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 200);
  };

  return (
    <>
      <Navbar />
      <div className=" bg-yellow-50 flex flex-col items-center mt-10">
        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 w-10/12 mt-6">
          {/* Lirik Section */}
          <div className="flex-1  bg-[#fee799] p-6 rounded-lg shadow-md ">
            <div className="flex-1 text-[15px] bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={songsData[currentSongIndex].cover}
                  alt="Album cover"
                  className="w-32 h-32 rounded-lg shadow-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">
                    {songsData[currentSongIndex].title}
                  </h2>
                  <p className="text-gray-600">
                    {songsData[currentSongIndex].artist}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden h-40">
                <p className="text-gray-700 text-justify animate-marquee">
                  {songsData[currentSongIndex].lyrics}
                </p>
              </div>
            </div>
          </div>
          {/* Player Section */}
          <div className="flex-1 bg-[#fee799]  py-[50px] mx-[50px] rounded-lg shadow-md flex flex-col items-center">
            <img
              src={songsData[currentSongIndex].cover}
              alt="Album cover"
              className="w-36 h-36 rounded-lg shadow-md mb-4"
            />
            <h2 className="text-lg font-semibold">
              {songsData[currentSongIndex].title}
            </h2>
            <p className="text-gray-600">
              {songsData[currentSongIndex].artist}
            </p>

            <audio ref={audioRef} src={songsData[currentSongIndex].src}></audio>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                className="w-12 h-12 bg-white text-white rounded-full shadow-md flex items-center justify-center"
                onClick={() => skipHandler(-1)}
              >
                ⏮
              </button>
              <button
                className="w-12 h-12 bg-white text-white rounded-full shadow-md flex items-center justify-center"
                onClick={playPauseHandler}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button
                className="w-12 h-12 bg-white bg-[#fee799] text-white rounded-full shadow-md flex items-center justify-center"
                onClick={() => skipHandler(1)}
              >
                ⏭
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TembangPlayer3;
