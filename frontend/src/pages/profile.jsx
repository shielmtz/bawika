import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import userService from "../service/userService";
import { FaUserCircle, FaHome, FaPhone, FaEnvelope } from "react-icons/fa"; // Import ikon yang diperlukan

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await userService.getProfile();
                setUserData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <>
            <Navbar />

            <div className="flex p-10  space-x-10">
                {/* Bagian Informasi Profil */}
                <div className="w-full  flex flex-col items-center  p-6 space-y-4">
                    <div className="relative">
                        <img
                            src={userData?.image_path}
                            alt="Profile Picture"
                            className="w-[300px] h-[300px] rounded-full object-cover border-2 border-black"
                        />

                    </div>


                    {/* Tombol Edit dan Logout */}
                    <div className="space-x-3">
                        <Link
                            className="bg-[#FFE79A] text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
                            to={'/edit/profile'}
                        >
                            Edit Profil
                        </Link>
                        <button
                            className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Informasi User */}
                <div className="w-full flex justify-start items-center">

                    <div className="flex flex-col items-start justify-center p-20 space-y-4 bg-[#FFE79A] rounded-3xl shadow-xl">
                        <div className="flex items-center justify-center space-x-4">
                            <FaUserCircle className="text-black w-6 h-6" />
                            <h2 className="text-2xl font-semibold text-gray-800">{userData?.name || "Nama tidak tersedia"}</h2>
                        </div>
                        {/* Alamat */}
                        <div className="flex items-center justify-center space-x-4">
                            <FaHome className="text-gray-700 w-6 h-6" />
                            <span className={userData?.alamat ? "font-semibold text-2xl" : "font-semibold text-2xl text-red-500"}>
                                {userData?.alamat || "Alamat belum tersedia"}
                            </span>
                        </div>

                        {/* Nomor Handphone */}
                        <div className="flex items-center justify-center space-x-4">
                            <FaPhone className="text-gray-700 w-6 h-6" />
                            <span className={userData?.no_handphone ? "font-semibold text-2xl" : "font-semibold text-2xl text-red-500"}>
                                {userData?.no_handphone || "No handphone belum tersedia"}
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-center space-x-4">
                            <FaEnvelope className="text-gray-700 w-6 h-6" />
                            <span className="font-semibold text-2xl">{userData?.email || "Email belum tersedia"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
