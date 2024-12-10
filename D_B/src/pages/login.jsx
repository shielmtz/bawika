import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";
import charat from "../assets/chara2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy data untuk akun terdaftar
  const registeredAccounts = [
    { email: "shilamumtaz@gmail.com", password: "123456" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Cek apakah akun terdaftar
    const account = registeredAccounts.find(
      (acc) => acc.email === email && acc.password === password
    );

    if (account) {
      toast.success("Login berhasil!");
      navigate("/"); // Redirect ke halaman home
    } else {
      toast.error("Akun belum terdaftar. Silakan buat akun terlebih dahulu.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#fee799]">
      {/* Bagian Kiri */}
      <div className="flex-1 flex items-center justify-center p-10 bg-[#fee799]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 ">
            Halo, Kembali lagi di Bawika.
          </h1>
          <img
            src={charat}
            alt="Bawika Character"
            className="mt-10 mx-10 w-60 h-50 "
          />
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="flex-1 flex md:flex-row items-center justify-center p-10">
        <div className="bg-white rounded-lg  shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-6 ">
            <img src={logo} alt="Bawika Logo" className="mx-auto mb-2 w-20" />
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          </div>

          {/* Form Login */}
          <form onSubmit={handleLogin}>
            <div className="mb-4 ">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan Password"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end mb-6">
              <Link
                to="/login/forgotpassword"
                className="text-sm text-yellow-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded font-bold hover:bg-yellow-600"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              Belum punya akun?{" "}
              <Link to="/signup" className="text-yellow-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
