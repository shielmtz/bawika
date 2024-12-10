import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/sidebar";
import dongengService from "../service/dongengService";
import { FaUserAlt, FaBook, FaRegLightbulb, FaMusic, FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import eventService from "../service/eventService";
import Swal from "sweetalert2";
import musicService from "../service/musicService";
import pembelajaranService from "../service/pembelajaranService";
import userService from "../service/userService";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [musicData, setMusicData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [materiData, setMateriData] = useState([]);
  const [userData, setUserData] = useState([]);
  // Data event untuk tabel

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    fetchData();
    fetchEvents();
    fetchMusic();
    fetchMateries();
    fetchUsers();
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

  const fetchEvents = async () => {
    try {
      const events = await eventService.getEvents();
      setEventData(events);
      console.log(events)
    } catch (error) {
      Swal.fire("Gagal!", "Gagal mengambil data event.", "error");
      console.error(error);
    }
  };

  const fetchMusic = async () => {
    try {
      const response = await musicService.getMusics();
      setMusicData(response);
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to fetch data.", "error");
    }
  };

  const fetchMateries = async () => {
    try {
      const materies = await pembelajaranService.getPembelajarans();
      setMateriData(materies);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchUsers = async () => {
    try {
      const users = await userService.getUsers();
      setUserData(users);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} title={"Dashboard"} />
      <div className="pt-20 min-h-screen w-full bg-gray-100">
        <main className="p-6">
          {/* Grid Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {/* Pengguna */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaUserAlt className="text-blue-500 text-2xl mr-3" />
              <div>
                <h3 className="text-gray-600">Pengguna</h3>
                <p className="text-2xl font-bold">{userData.length}</p>
              </div>
            </div>

            {/* Materi Pembelajaran */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaBook className="text-green-500 text-2xl mr-3" />
              <div>
                <h3 className="text-gray-600">Materi Pembelajaran</h3>
                <p className="text-2xl font-bold">{materiData.length}</p>
              </div>
            </div>

            {/* Dongeng */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaRegLightbulb className="text-yellow-500 text-2xl mr-3" />
              <div>
                <h3 className="text-gray-600">Dongeng</h3>
                <p className="text-2xl font-bold">{data.length}</p>
              </div>
            </div>

            {/* Tembang Jawa */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaMusic className="text-purple-500 text-2xl mr-3" />
              <div>
                <h3 className="text-gray-600">Tembang Jawa</h3>
                <p className="text-2xl font-bold">{musicData.length}</p>
              </div>
            </div>

            {/* Event */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaCalendarAlt className="text-red-500 text-2xl mr-3" />
              <div>
                <h3 className="text-gray-600">Event</h3>
                <p className="text-2xl font-bold">{eventData.length}</p>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Data Pengguna</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Name</th>
                  <th className="border-b p-2">Alamat</th>
                  <th className="border-b p-2">Email</th>
                  <th className="border-b p-2">Nomor Telepon</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td className="p-2 border-b">{user.name}</td>
                    <td className={`p-2 border-b ${user.alamat ? `` : `text-red-500`}`}>{user.alamat || "Belum ada"}</td>
                    <td className="p-2 border-b">{user.email}</td>
                    <td className={`p-2 border-b ${user.no_handphone ? `` : `text-red-500`}`}>{user.no_handphone || "Belum ada"}</td>
                    <td className="p-2 border-b">

                    </td>

                    <td className="p-2 border-b">
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
