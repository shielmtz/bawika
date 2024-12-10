import React, { useState } from "react";

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Agita Sandra Dewi",
    location: "Rungkut, Surabaya",
    phone: "+62 8123456790",
    email: "agitttttt@gmail.com",
    subscription: "Paket Premium",
    photo: "https://via.placeholder.com/150", // Ganti dengan URL foto profil atau path lokal
  });

  const [editData, setEditData] = useState(profile);

  // Handle open and close modal
  const handleEdit = () => {
    setEditData(profile); // Reset edit data
    setIsEditModalOpen(true);
  };

  const handleSave = () => {
    setProfile(editData);
    setIsEditModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-md p-6 flex flex-col items-center">
        <img
          src={profile.photo}
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-md mb-4"
        />
        <h2 className="text-lg font-semibold">{profile.name}</h2>
        <button
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md"
          onClick={handleEdit}
        >
          Edit Profil
        </button>
        <div className="bg-yellow-200 mt-6 w-full p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <span className="material-icons mr-2">location_on :</span>
            <p>{profile.location}</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="material-icons mr-2">phone :</span>
            <p>{profile.phone}</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="material-icons mr-2">email :</span>
            <p>{profile.email}</p>
          </div>
          <div className="flex items-center">
            <span className="material-icons mr-2">public :</span>
            <p>{profile.subscription}</p>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-full max-w-md rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Edit Profil</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={editData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Subscription
              </label>
              <input
                type="text"
                name="subscription"
                value={editData.subscription}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
