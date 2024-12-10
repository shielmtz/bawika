import { useEffect, useState } from "react";
import Table from "../components/dashboard/table";
import Sidebar from "../components/dashboard/sidebar";
import musicService from "../service/musicService";
import Swal from "sweetalert2";

function TembangJawaDashboard() {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    pencipta: "",
    audioPath: null,
    imagePath: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await musicService.getMusics();
      setData(response);
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to fetch data.", "error");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formToSubmit.append(key, formData[key]);
    });

    try {
      if (isEditing) {
        await musicService.updateMusic(editId, formToSubmit);
        Swal.fire("Success!", "Tembang Jawa successfully updated.", "success");
      } else {
        await musicService.createMusic(formToSubmit);
        Swal.fire("Success!", "Tembang Jawa successfully added.", "success");
      }

      fetchData();
      resetForm();
    } catch (error) {
      Swal.fire("Error!", "Failed to save Tembang Jawa.", "error");
      console.error(error);
    }
  };

  const handleEdit = (music) => {
    setFormData({
      title: music.title,
      description: music.description,
      pencipta: music.pencipta,
      audioPath: null, // Cannot set file for edit
      imagePath: null, // Cannot set file for edit
    });
    setIsEditing(true);
    setEditId(music.id);
  };

  const handleDelete = async (id) => {
    try {
      await musicService.deleteMusic(id);
      Swal.fire("Success!", "Tembang Jawa successfully deleted.", "success");
      fetchData();
    } catch (error) {
      Swal.fire("Error!", "Failed to delete Tembang Jawa.", "error");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      pencipta: "",
      audioPath: null,
      imagePath: null,
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} title={'Tembang Jawa'} />

      <div className="min-h-screen pt-20 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tembang Jawa</h1>
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
              <label htmlFor="pencipta" className="block mb-2 font-medium text-gray-700">Pencipta</label>
              <input
                id="pencipta"
                type="text"
                name="pencipta"
                placeholder="Pencipta"
                value={formData.pencipta}
                onChange={handleInputChange}
                className="border rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="audioPath" className="block mb-2 font-medium text-gray-700">Audio File</label>
              <input
                id="audioPath"
                type="file"
                name="audioPath"
                accept="audio/*"
                onChange={handleInputChange}
                className="border rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="imagePath" className="block mb-2 font-medium text-gray-700">Image File</label>
              <input
                id="imagePath"
                type="file"
                name="imagePath"
                accept="image/*"
                onChange={handleInputChange}
                className="border rounded-lg p-2 w-full"
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
        <Table
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default TembangJawaDashboard;
