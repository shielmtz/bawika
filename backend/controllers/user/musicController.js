'use strict';

const { Music } = require('../../associations'); // Pastikan relasi sudah diatur
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Tentukan path untuk penyimpanan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../frontend/public/music');
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

// Validasi file berdasarkan tipe
const fileFilter = (req, file, cb) => {
    console.log('MIME Type:', file.mimetype);
    const allowedImageTypes = /jpeg|jpg|png/;
    const allowedMusicTypes = /mp3|mpeg|wav/;

    if (
        (file.mimetype.startsWith('image') && allowedImageTypes.test(file.mimetype)) ||
        (file.mimetype.startsWith('audio') && allowedMusicTypes.test(file.mimetype))
    ) {
        return cb(null, true);
    }
    cb(new Error('File type must be an image (jpeg, jpg, png) or audio (mp3,mpeg, wav)'));
};


const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // Maksimal ukuran file 10MB
    },
    fileFilter,
});

// **Create Music Entry**
const createMusic = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const { title, description, pencipta } = req.body;
        const { imagePath, audioPath } = req.files;

        if (!title || !description || !pencipta) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newMusic = await Music.create({
            title,
            description,
            pencipta,
            music_path: audioPath[0].filename,
            image_path: imagePath[0].filename,
            createdBy: userId,
        });

        res.status(201).json({ message: 'Music created successfully', music: newMusic });
    } catch (error) {
        console.error('Error creating music entry:', error);
        res.status(500).json({ message: 'Failed to create music', error: error.message });
    }
};

// **Get All Music Entries**
const getAllMusics = async (req, res) => {
    try {
        const musics = await Music.findAll({
            attributes: ['id', 'title', 'description', 'pencipta', 'createdBy', 'music_path', 'image_path'],
            order: [['createdAt', 'DESC']],
        });

        res.status(200).json({ musics });
    } catch (error) {
        console.error('Error fetching music list:', error);
        res.status(500).json({ message: 'Failed to retrieve music list', error: error.message });
    }
};

// **Get Music by ID**
const getMusicById = async (req, res) => {
    try {
        const musicId = req.params.id;
        const music = await Music.findOne({
            where: { id: musicId },
            attributes: ['id', 'title', 'description', 'pencipta', 'music_path', 'image_path', 'createdBy'],
        });

        if (!music) {
            return res.status(404).json({ message: 'Music not found' });
        }

        res.status(200).json({ music });
    } catch (error) {
        console.error('Error fetching music by ID:', error);
        res.status(500).json({ message: 'Failed to retrieve music', error: error.message });
    }
};

// **Update Music Entry**
const updateMusic = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const musicId = req.params.id;
        const { title, description, pencipta } = req.body;
        const { imagePath, audioPath } = req.files || {}; // Ambil file baru jika diunggah

        const music = await Music.findOne({ where: { id: musicId, createdBy: userId } });

        if (!music) {
            return res.status(404).json({ message: 'Music not found or you are not authorized to update this' });
        }

        // Simpan referensi file lama
        const oldMusicPath = music.music_path;
        const oldImagePath = music.image_path;

        // Update fields jika disediakan
        if (title) music.title = title;
        if (description) music.description = description;
        if (pencipta) music.pencipta = pencipta;

        // Update file path jika ada file baru diunggah
        if (audioPath) {
            music.music_path = audioPath[0].filename;

            // Hapus file lama jika file baru diunggah
            if (fs.existsSync(oldMusicPath)) {
                fs.unlinkSync(oldMusicPath);
            }
        }

        if (imagePath) {
            music.image_path = imagePath[0].filename;

            // Hapus file lama jika file baru diunggah
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
        }

        await music.save(); // Simpan perubahan ke database

        res.status(200).json({ message: 'Music updated successfully', music });
    } catch (error) {
        console.error('Error updating music:', error);
        res.status(500).json({ message: 'Failed to update music', error: error.message });
    }
};

// **Delete Music Entry**
const deleteMusic = async (req, res) => {
    try {
        const userId = req.userId;
        const musicId = req.params.id;

        const music = await Music.findOne({ where: { id: musicId, createdBy: userId } });

        if (!music) {
            return res.status(404).json({ message: 'Music not found or you are not authorized to delete this' });
        }

        // Hapus file dari server jika ada
        if (fs.existsSync(music.music_path)) {
            fs.unlinkSync(music.music_path);
        }

        if (fs.existsSync(music.image_path)) {
            fs.unlinkSync(music.image_path);
        }

        await music.destroy();
        res.status(200).json({ message: 'Music deleted successfully' });
    } catch (error) {
        console.error('Error deleting music:', error);
        res.status(500).json({ message: 'Failed to delete music', error: error.message });
    }
};

module.exports = {
    upload,
    createMusic,
    getAllMusics,
    getMusicById,
    updateMusic,
    deleteMusic,
};
