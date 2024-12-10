import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/sidebar";
import eventService from "../service/eventService";
import Swal from "sweetalert2";
import TableEvent from "../components/dashboard/TableEvent";

export default function EventDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [eventData, setEventData] = useState([]); // Data event untuk tabel
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        start_date: "",
        image_path: null,
        end_date: "",
        status: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // Ambil daftar event dari server setiap kali komponen dimuat
    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const events = await eventService.getEvents();
            setEventData(events);
        } catch (error) {
            Swal.fire("Gagal!", "Gagal mengambil data event.", "error");
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formToSubmit = new FormData();
        Object.keys(formData).forEach((key) => {
            formToSubmit.append(key, formData[key]);
        });

        try {
            if (isEditing) {
                await eventService.updateEvent(editId, formToSubmit);
                Swal.fire("Berhasil!", "Event berhasil diperbarui.", "success");
            } else {
                await eventService.createEvent(formToSubmit);
                Swal.fire("Berhasil!", "Event berhasil ditambahkan.", "success");
            }

            fetchEvents();
            resetForm();
        } catch (error) {
            Swal.fire("Gagal!", "Terjadi kesalahan saat menyimpan data.", "error");
            console.error(error);
        }
    };

    const handleEditEvent = (event) => {
        setFormData({
            title: event.title,
            description: event.description,
            start_date: event.start_date,
            end_date: event.end_date,
            image_path: null,
            status: event.status,
        });
        setIsEditing(true);
        setEditId(event.id);
    };

    const handleDeleteEvent = async (id) => {
        try {
            await eventService.deleteEvent(id);
            Swal.fire("Berhasil!", "Event berhasil dihapus.", "success");
            fetchEvents();
        } catch (error) {
            Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus event.", "error");
            console.error(error);
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            start_date: "",
            end_date: "",
            status: "",
        });
        setIsEditing(false);
        setEditId(null);
    };

    return (
        <>
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                title={"Event"}
            />

            <div className="min-h-screen bg-gray-100 px-6 py-20">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Event Dashboard</h1>
                </header>

                {/* Bagian Formulir Tambah/Edit Event */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-lg font-bold text-gray-700 mb-4">
                        {isEditing ? "Edit Event" : "Tambah Event"}
                    </h2>
                    <form
                        onSubmit={handleFormSubmit}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                    >
                        {/* Input Judul Event */}
                        <div className="w-full">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Judul Event
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Judul Event"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>

                        {/* Input Deskripsi Event */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Deskripsi Event
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Deskripsi Event"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>

                        {/* Input Tanggal Mulai */}
                        <div>
                            <label
                                htmlFor="start_date"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Tanggal Mulai
                            </label>
                            <input
                                type="date"
                                id="start_date"
                                name="start_date"
                                placeholder="Tanggal Mulai"
                                value={formData.start_date}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2 w-full"
                            />
                        </div>

                        {/* Input Tanggal Berakhir */}
                        <div>
                            <label
                                htmlFor="end_date"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Tanggal Berakhir
                            </label>
                            <input
                                type="date"
                                id="end_date"
                                name="end_date"
                                placeholder="Tanggal Berakhir"
                                value={formData.end_date}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2 w-full"
                            />
                        </div>

                        {/* Dropdown Status */}
                        <div>
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2"
                                required
                            >
                                <option value="">Pilih Status</option>
                                <option value="Terbuka">Terbuka</option>
                                <option value="Akan Datang">Akan Datang</option>
                                <option value="Berakhir">Berakhir</option>
                            </select>
                        </div>

                        {/* Input File */}
                        <div>
                            <label
                                htmlFor="image_path"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Unggah Gambar
                            </label>
                            <input
                                type="file"
                                id="image_path"
                                name="image_path"
                                accept="image/*"
                                onChange={handleInputChange}
                                className="border rounded-lg p-2"
                            />
                        </div>

                        {/* Tombol Submit dan Batal */}
                        <div className="sm:col-span-2 flex items-center gap-4">
                            <button
                                type="submit"
                                className={`px-4 py-2 rounded-lg text-white ${isEditing ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
                                    }`}
                            >
                                {isEditing ? "Update" : "Tambah"}
                            </button>
                            {isEditing && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                >
                                    Batal
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Tabel Event */}
                <TableEvent
                    data={eventData}
                    onEdit={handleEditEvent}
                    onDelete={handleDeleteEvent}
                />
            </div>
        </>
    );
}
