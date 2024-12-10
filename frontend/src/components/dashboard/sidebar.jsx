import {
  FiX,
  FiUser,
  FiLogOut,
  FiBook,
  FiFeather,
  FiMusic,
  FiCalendar,
  FiMenu,
} from "react-icons/fi";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar, title }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  }
  return (<>

    <div
      className={`fixed z-20 top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      style={{ width: "250px" }}
    >
      <div className="flex justify-between items-center px-4 py-3 bg-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
        <button onClick={toggleSidebar}>
          <FiX className="text-gray-700 w-6 h-6" />
        </button>
      </div>
      <nav className="mt-4 space-y-4">
        <a
          href="/dashboard"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiUser className="w-5 h-5 mr-3" /> Pengguna
        </a>

        <a
          href="/materidashboard"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiBook className="w-5 h-5 mr-3" /> Materi Pembelajaran
        </a>
        <a
          href="/dongengdashboard"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiFeather className="w-5 h-5 mr-3" /> Dongeng
        </a>
        <a
          href="/tembangjawadashboard"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiMusic className="w-5 h-5 mr-3" /> Tembang Jawa
        </a>
        <a
          href="/eventdashboard"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiCalendar className="w-5 h-5 mr-3" /> Event
        </a>
        <Link
          onClick={handleLogout}
          to="/"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiLogOut className="w-5 h-5 mr-3" /> Logout
        </Link>
      </nav>
    </div>

    <header className="flex fixed w-full justify-between items-center bg-white shadow-md px-6 py-4">
      <button onClick={toggleSidebar} className="text-gray-700">
        <FiMenu className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
      <div>
        <img
          src="logo.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  </>
  );
};

export default Sidebar;
