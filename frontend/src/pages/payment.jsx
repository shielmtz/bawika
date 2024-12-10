import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    setPaymentProof(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!selectedBank) {
      alert("Harap pilih bank.");
      return;
    }
    if (!paymentProof) {
      alert("Harap upload bukti pembayaran.");
      return;
    }
    // Navigasi ke halaman berikutnya
    navigate("/success");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-yellow-50 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-6">
        Selesaikan Pembayaran
      </h2>

      {/* Pilihan Bank */}
      <div className="space-y-4 mb-6">
        {["Mandiri", "Bank BTN", "BCA"].map((bank) => (
          <div
            key={bank}
            className={`flex items-center p-4 rounded-lg border ${
              selectedBank === bank
                ? "border-yellow-400 bg-yellow-100"
                : "border-gray-300"
            }`}
          >
            <label className="flex items-center cursor-pointer w-full">
              <input
                type="radio"
                name="bank"
                value={bank}
                checked={selectedBank === bank}
                onChange={() => setSelectedBank(bank)}
                className="form-radio text-yellow-500 w-5 h-5"
              />
              <span className="ml-3 text-lg">{bank}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Informasi Rekening */}
      <div className="mb-6">
        <div className="bg-yellow-100 p-4 rounded-lg mb-2">
          <p className="text-sm text-gray-600">Nomor rekening</p>
          <p className="text-lg font-semibold">4801610027808</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Nama</p>
          <p className="text-lg font-semibold">Shila M.</p>
        </div>
      </div>

      {/* Upload Bukti Pembayaran */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-600 font-medium">
          Upload Bukti Pembayaran
        </label>
        <div
          className={`border-2 ${
            paymentProof ? "border-yellow-400" : "border-dashed border-gray-300"
          } rounded-lg p-6 text-center`}
        >
          {paymentProof ? (
            <p className="text-gray-700">
              {paymentProof.name}{" "}
              <span
                onClick={() => setPaymentProof(null)}
                className="text-red-500 cursor-pointer"
              >
                (Hapus)
              </span>
            </p>
          ) : (
            <label
              htmlFor="upload"
              className="cursor-pointer text-gray-500 hover:text-yellow-500"
            >
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16l-4-4m0 0l4-4m-4 4h14m5 0a9 9 0 11-9-9v3a3 3 0 003 3h3"
                  />
                </svg>
                <span>Click here to upload or drop media here</span>
              </div>
              <input
                id="upload"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          )}
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-between">
        <button
          className="bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-200"
          onClick={() => alert("Pembayaran dibatalkan.")}
        >
          Batal
        </button>
        <button
          className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-200"
          onClick={handleSubmit}
        >
          Konfirmasi
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
