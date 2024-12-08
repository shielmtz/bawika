import React, { useState } from "react";
import Sidebar from "../components/dashboard/sidebar";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <header className="flex justify-between items-center bg-white shadow-md px-6 py-4">
            <button onClick={toggleSidebar} className="text-gray-700">
              <FiMenu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
            <div>
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </header>

          {/* Content */}
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-600">Pengguna Aktif</h3>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-green-500">
                  Naik 8.5% dari bulan lalu
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-600">Materi</h3>
                <p className="text-2xl font-bold">15</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-600">Pendapatan</h3>
                <p className="text-2xl font-bold">Rp 156,000</p>
                <p className="text-sm text-red-500">
                  Menurun 4.3% dari bulan lalu
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-600">Langganan Aktif</h3>
                <p className="text-2xl font-bold">13</p>
                <p className="text-sm text-green-500">Naik 1.8% dari kemarin</p>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Pelanggan</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2">Nama Pelanggan</th>
                    <th className="border-b p-2">Asal</th>
                    <th className="border-b p-2">Mulai Langganan</th>
                    <th className="border-b p-2">Tipe</th>
                    <th className="border-b p-2">Amount</th>
                    <th className="border-b p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">Ferdinand</td>
                    <td className="p-2 border-b">Surabaya</td>
                    <td className="p-2 border-b">12.09.2019 - 12:53 PM</td>
                    <td className="p-2 border-b">Mingguan</td>
                    <td className="p-2 border-b">Rp 7,000</td>
                    <td className="p-2 border-b text-green-500">Aktif</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Anna Agnes</td>
                    <td className="p-2 border-b">Yogyakarta</td>
                    <td className="p-2 border-b">12.09.2019 - 12:53 PM</td>
                    <td className="p-2 border-b">Bulanan</td>
                    <td className="p-2 border-b">Rp 17,000</td>
                    <td className="p-2 border-b text-green-500">Aktif</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Rafael Struick</td>
                    <td className="p-2 border-b">Magelang</td>
                    <td className="p-2 border-b">12.09.2019 - 12:53 PM</td>
                    <td className="p-2 border-b">Tahunan</td>
                    <td className="p-2 border-b">Rp 170,000</td>
                    <td className="p-2 border-b text-green-500">Aktif</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
