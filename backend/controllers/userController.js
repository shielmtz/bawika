const { Op } = require("sequelize");
const { User } = require("../associations");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Konfigurasi Multer untuk upload gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, "../../D_B/public/image/profile");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error("Only images (jpeg, jpg, png) are allowed!"));
    },
});

// Fungsi untuk mendapatkan semua data user kecuali dengan role "admin"
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                role: {
                    [Op.ne]: "admin", // Mengambil semua user kecuali role admin
                },
            },
        });

        // Menghapus password dari setiap respons
        const sanitizedUsers = users.map(user => {
            const { password, ...userData } = user.toJSON();
            return userData;
        });

        return res.status(200).json({
            users: sanitizedUsers,
        });
    } catch (error) {
        console.error("Error fetching all users:", error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

// Fungsi untuk mendapatkan data user berdasarkan ID
const getUserById = async (req, res) => {
    const userId = req.userId; // Ambil id dari parameter route

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const { password, ...userData } = user.toJSON(); // Menghapus password
        return res.status(200).json({
            user: userData,
        });
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

// Fungsi untuk melakukan update data user
const updateUserData = async (req, res) => {
    try {
        const userId = req.userId;
        const { name, alamat, no_handphone, email } = req.body;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: 'User not found or you are not authorized to update this event'
            });
        }

        // Update fields if they exist in the request
        if (name) user.name = name;
        if (alamat) user.alamat = alamat;
        if (no_handphone) user.no_handphone = no_handphone;
        if (email) user.email = email;

        // Handle image upload
        if (req.file) {
            user.image_path = `/image/profile/${req.file.filename}`;
        }

        await user.save();

        // Hapus `password` sebelum merespons
        const userResponse = user.toJSON(); // Mengubah Sequelize instance menjadi objek biasa
        delete userResponse.password; // Menghapus properti password dari respons

        res.status(200).json({ message: 'User updated successfully', user: userResponse });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({
            message: 'Failed to update user',
            error: error.message
        });
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    upload,
    updateUserData,
};
