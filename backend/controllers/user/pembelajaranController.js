const { Pembelajaran } = require('../../associations'); // Pastikan relasi sudah diatur
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Tentukan path folder tujuan untuk upload video
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../frontend/public/image/materi');

        // Periksa apakah folder sudah ada, jika belum buat folder
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir); // Tentukan direktori penyimpanan file
    },
    filename: (req, file, cb) => {
        // Gunakan angka acak sebagai nama file
        const uniqueSuffix = Math.round(Math.random() * 1E9); // Angka acak unik
        const fileExt = path.extname(file.originalname).toLowerCase(); // Ekstensi file

        // Gabungkan nama file dengan ekstensi asli
        cb(null, `${uniqueSuffix}${fileExt}`);
    }
});

// Setup Multer dengan pengaturan storage dan validasi file
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Maksimal ukuran file 5MB
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/; // Ekstensi yang diterima
        const mimetype = filetypes.test(file.mimetype); // Validasi tipe MIME
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Validasi ekstensi

        if (mimetype && extname) {
            return cb(null, true); // File diterima
        }
        cb(new Error('Only images (jpeg, jpg, png) are allowed!')); // Jika tidak sesuai, kirim error
    }
});

const createPebelajaran = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const { title, description, pdf_link, category_id } = req.body;

        // Validasi input
        if (!category_id) {
            return res.status(400).json({ message: 'Category ID is required' });
        }
        const image_path = req.file ? `/image/materi/${req.file.filename}` : null;
        // Buat entri pembelajaran baru
        const newPebelajaran = await Pembelajaran.create({
            title,
            description,
            pdf_link,
            image_path,
            category_id,
            createdBy: userId,
        });

        res.status(201).json({ message: 'Pebelajaran created successfully', pembelajaran: newPebelajaran });
    } catch (error) {
        console.error('Error creating pembelajaran:', error);
        res.status(500).json({ message: 'Failed to create pembelajaran', error: error.message });
    }
};

// **Get All Pebelajarans**
const getPebelajarans = async (req, res) => {
    try {
        // Ambil semua pembelajaran
        const pembelajarans = await Pembelajaran.findAll({
            attributes: ['id', 'title', 'description', 'image_path', 'category_id', 'createdBy', 'createdAt', 'updatedAt'],
            order: [['createdAt', 'DESC']],
        });

        res.status(200).json({ pembelajarans });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve pebelajarans', error: error.message });
    }
};

// **Get Pebelajaran by ID**
const getPebelajaranById = async (req, res) => {
    try {
        const pebelajaranId = req.params.id; // ID pembelajaran dari URL params

        // Cari pembelajaran berdasarkan ID
        const pembelajaran = await Pembelajaran.findOne({
            where: { id: pebelajaranId },
            attributes: ['id', 'title', 'description', 'pdf_link', 'image_path', 'category_id', 'createdBy', 'createdAt', 'updatedAt'],
        });

        if (!pembelajaran) {
            return res.status(404).json({ message: 'Pebelajaran not found' });
        }

        res.status(200).json({ pembelajaran });
    } catch (error) {
        console.error('Error retrieving pembelajaran:', error);
        res.status(500).json({ message: 'Failed to retrieve pembelajaran', error: error.message });
    }
};

const getPembelajaranByCategoryId = async (req, res) => {
    try {
        const categoryId = req.params.id; // ID video dari URL params

        // Cari video berdasarkan ID
        const pembelajarans = await Pembelajaran.findAll({
            where: { category_id: categoryId },
            attributes: ['id', 'title', 'description', 'image_path', 'category_id', 'createdBy', 'createdAt', 'updatedAt'],
        });

        if (!pembelajarans) {
            return res.status(404).json({ message: 'Pembelajaran not found' });
        }

        res.status(200).json({ pembelajarans });
    } catch (error) {
        console.error('Error retrieving pembelajaran:', error);
        res.status(500).json({ message: 'Failed to retrieve pembelajaran', error: error.message });
    }
};

// **Update Pebelajaran**
const updatePebelajaran = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const pebelajaranId = req.params.id; // ID pembelajaran dari URL params
        const { title, description, pdf_link, category_id } = req.body;

        // Cari pembelajaran berdasarkan ID dan validasi createdBy
        const pembelajaran = await Pembelajaran.findOne({ where: { id: pebelajaranId, createdBy: userId } });

        if (!pembelajaran) {
            return res.status(404).json({ message: 'Pebelajaran not found or you are not authorized to update this pembelajaran' });
        }


        // Update hanya kolom yang diberikan
        if (title) pembelajaran.title = title;
        if (description) pembelajaran.description = description;
        if (pdf_link) pembelajaran.pdf_link = pdf_link;
        if (category_id) pembelajaran.category_id = category_id;
        if (req.file) {
            pembelajaran.image_path = `/image/materi/${req.file.filename}`;
        }
        // Simpan perubahan
        await pembelajaran.save();

        res.status(200).json({ message: 'Pebelajaran updated successfully', pembelajaran });
    } catch (error) {
        console.error('Error updating pembelajaran:', error);
        res.status(500).json({ message: 'Failed to update pembelajaran', error: error.message });
    }
};

// **Delete Pebelajaran**
const deletePebelajaran = async (req, res) => {
    try {
        const userId = req.userId;
        const pembelajaranId = req.params.id;

        // Cari pembelajaran berdasarkan ID dan validasi createdBy
        const pembelajaran = await Pembelajaran.findOne({ where: { id: pembelajaranId, createdBy: userId } });

        if (!pembelajaran) {
            return res.status(404).json({ message: 'Pebelajaran not found or you are not authorized to delete this pembelajaran' });
        }

        // Gunakan destroy() untuk soft delete
        await pembelajaran.destroy();

        res.status(200).json({ message: 'Pebelajaran deleted successfully' });
    } catch (error) {
        console.error('Error deleting pembelajaran:', error);
        res.status(500).json({ message: 'Failed to delete pembelajaran', error: error.message });
    }
};


module.exports = { upload, createPebelajaran, getPebelajarans, getPebelajaranById, updatePebelajaran, deletePebelajaran, getPembelajaranByCategoryId };
