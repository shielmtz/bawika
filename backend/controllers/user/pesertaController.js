const { Peserta, Event } = require('../../associations'); // Pastikan path ini benar
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Konfigurasi Multer untuk upload gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../frontend/public/image/peserta');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Maksimal ukuran file 5MB
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only images (jpeg, jpg, png) are allowed!'));
    }
});

// **Create Peserta**
const createPeserta = async (req, res) => {
    try {
        const { name, ttl, alamat, no_handphone, email, event_id } = req.body;
        const userId = req.userId; // ID pengguna yang sedang login

        if (!name || !ttl || !alamat || !no_handphone || !email || !event_id) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const image_path = req.file ? `/image/peserta/${req.file.filename}` : null;

        const newPeserta = await Peserta.create({
            name,
            ttl,
            alamat,
            no_handphone,
            email,
            event_id,
            image_path,
            createdBy: userId,
        });

        res.status(201).json({ message: 'Peserta created successfully', peserta: newPeserta });
    } catch (error) {
        console.error('Error creating peserta:', error);
        res.status(500).json({ message: 'Failed to create peserta', error: error.message });
    }
};

// **Get All Pesertas**
const getPesertas = async (req, res) => {
    try {
        const pesertas = await Peserta.findAll({
            attributes: ['id', 'name', 'ttl', 'alamat', 'no_handphone', 'email', 'image_path', 'event_id', 'createdBy', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: Event,
                    as: 'event',
                    attributes: ['id', 'title', 'start_date', 'end_date']
                }
            ],
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json({ pesertas });
    } catch (error) {
        console.error('Error fetching pesertas:', error);
        res.status(500).json({ message: 'Failed to retrieve pesertas', error: error.message });
    }
};

// **Get Peserta by ID**
const getPesertaById = async (req, res) => {
    try {
        const pesertaId = req.params.id;
        const peserta = await Peserta.findOne({
            where: { id: pesertaId },
            attributes: ['id', 'name', 'ttl', 'alamat', 'no_handphone', 'email', 'image_path', 'event_id', 'createdBy', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: Event,
                    as: 'event',
                    attributes: ['id', 'title', 'start_date', 'end_date']
                }
            ]
        });

        if (!peserta) {
            return res.status(404).json({ message: 'Peserta not found' });
        }

        res.status(200).json({ peserta });
    } catch (error) {
        console.error('Error fetching peserta:', error);
        res.status(500).json({ message: 'Failed to retrieve peserta', error: error.message });
    }
};

// **Update Peserta**
const updatePeserta = async (req, res) => {
    try {
        const pesertaId = req.params.id;
        const userId = req.userId;
        const { name, ttl, alamat, no_handphone, email, event_id } = req.body;

        const peserta = await Peserta.findOne({ where: { id: pesertaId, createdBy: userId } });

        if (!peserta) {
            return res.status(404).json({ message: 'Peserta not found or you are not authorized to update this peserta' });
        }

        if (name) peserta.name = name;
        if (ttl) peserta.ttl = ttl;
        if (alamat) peserta.alamat = alamat;
        if (no_handphone) peserta.no_handphone = no_handphone;
        if (email) peserta.email = email;
        if (event_id) peserta.event_id = event_id;

        if (req.file) {
            peserta.image_path = `/image/peserta/${req.file.filename}`;
        }

        await peserta.save();

        res.status(200).json({ message: 'Peserta updated successfully', peserta });
    } catch (error) {
        console.error('Error updating peserta:', error);
        res.status(500).json({ message: 'Failed to update peserta', error: error.message });
    }
};

// **Delete Peserta**
const deletePeserta = async (req, res) => {
    try {
        const pesertaId = req.params.id;
        const userId = req.userId;

        const peserta = await Peserta.findOne({ where: { id: pesertaId, createdBy: userId } });

        if (!peserta) {
            return res.status(404).json({ message: 'Peserta not found or you are not authorized to delete this peserta' });
        }

        await peserta.destroy();

        res.status(200).json({ message: 'Peserta deleted successfully' });
    } catch (error) {
        console.error('Error deleting peserta:', error);
        res.status(500).json({ message: 'Failed to delete peserta', error: error.message });
    }
};

module.exports = { upload, createPeserta, getPesertas, getPesertaById, updatePeserta, deletePeserta };