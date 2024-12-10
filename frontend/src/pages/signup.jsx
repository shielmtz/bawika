import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo2 from "../assets/logo.png";
import charat2 from "../assets/chara.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Validasi input
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Semua kolom wajib diisi!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    try {
      // Kirim data formulir ke server
      const response = await fetch("http://localhost:9000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Pendaftaran berhasil!");

        // Login user dengan token dari server jika berhasil

        // Navigasi ke halaman /home
        setTimeout(() => navigate("/login"), 1000);
      } else {
        toast.error(result.message || "Terjadi kesalahan saat mendaftar.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Terjadi kesalahan saat menghubungi server.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row  bg-[#fee799]">
      {/* Bagian Kiri */}
      <div className="flex-1 flex items-center justify-center p-5">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <img src={logo2} alt="Bawika Logo" className="mx-auto mb-2 w-20" />
            <h2 className="text-2xl font-bold text-gray-800">Sign up Akun</h2>
          </div>

          {/* Form Sign Up */}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Nama Depan</label>
              <input
                type="text"
                name="firstName"
                placeholder="Masukkan Nama Depan"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Nama Belakang</label>
              <input
                type="text"
                name="lastName"
                placeholder="Masukkan Nama Belakang"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Konfirmasi Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Masukkan Konfirmasi Password"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded font-bold hover:bg-yellow-600"
            >
              Daftar
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-yellow-500 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="flex-1 flex items-center justify-center p-5 bg-[#fee799] text-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Sugeng Rawuh!</h1>
          <p className="text-gray-700 mb-4">Daftar sekarang dan jelajahi pengalaman belajar budaya Jawa bersama kami!</p>
          <img src={charat2} alt="Bawika Character" className="mt-19 w-80 h-75 mx-auto" />
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
