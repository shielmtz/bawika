import { useNavigate } from "react-router-dom";

const TableEvent = ({ data, onEdit, onDelete }) => {
    const navigate = useNavigate()
    const handleToDetail = (eventId) => {
        navigate(`/pesertadashboard/${eventId}`)
    }
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Daftar Event</h2>
            <table className="w-full table-auto border-collapse border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Judul</th>
                        <th className="border px-4 py-2">Deskripsi</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((event) => (
                        <tr key={event.id}>
                            <td className="border px-4 py-2">{event.title}</td>
                            <td className="border px-4 py-2">{event.description}</td>
                            <td className="border px-4 py-2">{event.status}</td>
                            <td className="border px-4 py-2 text-center">
                                <button onClick={() => handleToDetail(event.id)} className="text-yellow-500 hover:underline mr-2">Lihat</button>
                                <button onClick={() => onEdit(event)} className="text-blue-500 hover:underline">Edit</button>
                                <button onClick={() => onDelete(event.id)} className="text-red-500 hover:underline ml-2">Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default TableEvent;
