import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/sidebar";
import dongengService from "../service/dongengService";
import Swal from "sweetalert2";
import TableDongeng from "../components/dashboard/tableDongeng";

function DongengDashboard() {
    const [data, setData] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        video_link: "",
        thumbnail_link: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await dongengService.getDongengs();
            setData(response);
        } catch (err) {
            console.error(err);
            Swal.fire("Error!", "Failed to fetch data.", "error");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formToSubmit = new FormData();
        Object.keys(formData).forEach((key) => {
            formToSubmit.append(key, formData[key]);
        });

        try {
            if (isEditing) {
                await dongengService.updateDongeng(editId, formToSubmit);
                Swal.fire("Success!", "Dongeng successfully updated.", "success");
            } else {
                await dongengService.createDongeng(formToSubmit);
                Swal.fire("Success!", "Dongeng successfully added.", "success");
            }

            fetchData();
            resetForm();
        } catch (err) {
            Swal.fire("Error!", "Failed to save Dongeng.", "error");
        }
    };

    const handleEdit = (dongeng) => {
        setFormData({
            title: dongeng.title,
            description: dongeng.description,
            video_link: dongeng.videoLink,
            thumbnail_link: dongeng.thumbnailLink, // Cannot set file for edit
        });
        setIsEditing(true);
        setEditId(dongeng.id);
    };

    const handleDelete = async (id) => {
        try {
            await dongengService.deleteDongeng(id);
            Swal.fire("Success!", "Dongeng successfully deleted.", "success");
            fetchData();
        } catch (err) {
            Swal.fire("Error!", "Failed to delete Dongeng.", "error");
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            video_link: "",
            thumbnail_link: "",
        });
        setIsEditing(false);
        setEditId(null);
    };

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} title={'Dongeng'} />

            <div className="min-h-screen pt-20 bg-gray-100 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Dongeng</h1>

                </header>

                {/* Form */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="title" className="block mb-2 font-medium text-gray-700">Title</label>
                            <input
                                id="title"
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="video_link" className="block mb-2 font-medium text-gray-700">Link Video</label>
                            <input
                                id="video_link"
                                type="text"
                                name="video_link"
                                placeholder="Link video youtube"
                                value={formData.video_link}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="thumbnail_link" className="block mb-2 font-medium text-gray-700">Link Thumbnail</label>
                            <input
                                id="thumbnail_link"
                                type="text"
                                name="thumbnail_link"
                                placeholder="Link video youtube"
                                value={formData.thumbnail_link}
                                onChange={handleInputChange}
                                className="border rounded-lg p-2 w-full"
                                required
                            />
                        </div>


                        <div className="col-span-1 sm:col-span-2">
                            <button
                                type="submit"
                                className={`px-4 py-2 rounded-lg text-white ${isEditing ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}
                            >
                                {isEditing ? "Update" : "Add"}
                            </button>
                        </div>
                    </form>
                </div>


                {/* Table */}
                <TableDongeng
                    data={data}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </>
    );
}

export default DongengDashboard;
