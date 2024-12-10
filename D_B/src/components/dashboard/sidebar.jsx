import React from "react";
import {
  FiX,
  FiUser,
  FiLogIn,
  FiLogOut,
  FiBook,
  FiFeather,
  FiMusic,
  FiCalendar,
  FiCreditCard,
} from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed z-20 top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
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
          href="/berlangganan"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiUser className="w-5 h-5 mr-3" /> Berlangganan
        </a>
        <a
          href="/logindashboard"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiLogIn className="w-5 h-5 mr-3" /> Login
        </a>
        <a
          href="/logout"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiLogOut className="w-5 h-5 mr-3" /> Logout
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
        <a
          href="/paymentdashboard"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <FiCreditCard className="w-5 h-5 mr-3" /> Payment
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
