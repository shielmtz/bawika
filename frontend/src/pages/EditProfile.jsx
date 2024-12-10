import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import userService from "../service/userService";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
    const [formData, setFormData] = useState({
        name: "",
        alamat: "",
        no_handphone: "",
        email: "",
        image_path: null,
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch user data on component mount
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await userService.getProfile();
                setFormData({
                    name: data.name,
                    alamat: data.alamat,
                    no_handphone: data.no_handphone,
                    email: data.email,
                    image_path: data.image_path,
                });
            } catch (error) {
                Swal.fire("Error", error.message || "Failed to fetch user data.", "error");
            }
        };

        fetchUserProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image_path: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("alamat", formData.alamat);
            formDataToSend.append("no_handphone", formData.no_handphone);
            formDataToSend.append("email", formData.email);
            if (formData.image_path instanceof File) {
                formDataToSend.append("image_path", formData.image_path);
            }

            const updatedUser = await userService.updateUser(formDataToSend);
            Swal.fire("Success", "Profile updated successfully!", "success");
            setFormData({
                name: updatedUser.name,
                alamat: updatedUser.alamat,
                no_handphone: updatedUser.no_handphone,
                email: updatedUser.email,
                image_path: updatedUser.image_path,
            });
            navigate('/profile')
        } catch (error) {
            Swal.fire("Error", error.message || "Failed to update profile.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center my-5">
                <form
                    className="w-full max-w-md p-6 bg-[#FFE79A] shadow-md rounded"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Alamat</label>
                        <input
                            type="text"
                            name="alamat"
                            value={formData.alamat}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">No Handphone</label>
                        <input
                            type="text"
                            name="no_handphone"
                            value={formData.no_handphone}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Profile Picture</label>
                        <input
                            type="file"
                            name="image_path"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#AA705C] text-white py-2 px-4 rounded hover:bg-[#9b6554]"
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update Profile"}
                    </button>
                </form>
            </div>
        </>
    );
}
