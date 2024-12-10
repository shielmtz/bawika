import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setError("Email tidak boleh kosong.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Masukkan email yang valid.");
      return;
    }

    // Simulasi pengiriman email reset password
    alert("Email reset password telah dikirim!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Reset Password
        </h1>
        <p className="text-gray-600 mb-8 text-center text-sm">
          Masukkan email untuk menerima tautan reset password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan Email Anda"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(""); // Reset error jika user mengetik ulang
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
          >
            Kirim 
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
