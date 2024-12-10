export default function TableDongeng({ data, onEdit, onDelete }) {
  const getThumbnailUrl = (url) => {
    if (!url) return null;

    // Jika URL adalah format youtube short link
    const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/0.jpg`;
    }

    // Jika URL sudah dalam embed format, langsung kembalikan sebagai valid
    const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
    if (embedMatch && embedMatch[1]) {
      return `https://img.youtube.com/vi/${embedMatch[1]}/0.jpg`;
    }

    return null;
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left">Thumbnail</th>
            <th className="px-6 py-3 text-left">Judul</th>
            <th className="px-6 py-3 text-left">Deskripsi</th>
            <th className="px-6 py-3 text-left">Link Video</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((dongeng) => (
              <tr key={dongeng.id} className="border-t">
                <td className="px-6 py-4">
                  <img
                    src={getThumbnailUrl(dongeng.thumbnailLink)}
                    alt={dongeng.title || 'Cover Image'}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{dongeng.title}</td>
                <td className="px-6 py-4">
                  <p className="line-clamp-4">{dongeng.description}</p>
                </td>
                <td className="px-6 py-4">
                  {dongeng.videoLink ? (
                    <a
                      href={dongeng.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Lihat Video
                    </a>
                  ) : (
                    <span className="text-gray-500">Link tidak tersedia</span>
                  )}
                </td>
                <td className="px-6 py-4 flex justify-center space-x-2">
                  <button
                    onClick={() => onEdit(dongeng)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(dongeng.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
