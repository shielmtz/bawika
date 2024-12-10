import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PaymentProcessing = () => {
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleClose = () => {
    navigate("/"); // Arahkan ke halaman Home ("/")
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative bg-amber-50 rounded-lg p-6 w-80 shadow-lg">
        {/* Tombol Close */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-brown-500 bg-brown-100 hover:bg-brown-200 rounded-full p-1 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Ikon Jam Pasir */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#8B4513" /* Warna cokelat */
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.5 4h7M6 4h12M6 20h12M8.5 20h7m-7-2v-2c0-2.828 4-2.828 4-5s-4-2.172-4-5V6m7 12v-2c0-2.828-4-2.828-4-5s4-2.172 4-5V6"
            />
          </svg>
        </div>

        {/* Pesan Informasi */}
        <div className="text-center">
          <p className="text-gray-800 font-medium">
            Pembayaran diproses. Mohon tunggu konfirmasi admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessing;
