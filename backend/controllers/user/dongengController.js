const { Dongeng } = require('../../associations'); // Pastikan relasi sudah diatur
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Tentukan path folder tujuan untuk upload video
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../D_B/public/image/dongeng');

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

const isValidYouTubeLink = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/(watch\?v=|embed\/|v\/|e\/|playlist\?list=)?([A-Za-z0-9_-]{11})([?&][^#]*)?$/;
    return youtubeRegex.test(url);
};

const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:v=|\/)([A-Za-z0-9_-]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
};

const createDongeng = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const { title, video_link, description, thumbnail_link } = req.body;

        // Validasi input
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        // Validasi video_link
        if (!video_link || !isValidYouTubeLink(video_link)) {
            return res.status(400).json({ message: 'Invalid YouTube link' });
        }

        // Konversi video_link ke format embed
        const embedLink = getEmbedUrl(video_link);
        if (!embedLink) {
            return res.status(400).json({ message: 'Failed to process YouTube link' });
        }

        // Create new video entry
        const newDongeng = await Dongeng.create({
            title,
            description,
            video_link: embedLink,
            thumbnail_link: thumbnail_link || null, // Jika tidak ada thumbnail, set null
            createdBy: userId,
        });

        res.status(201).json({ message: 'Dongeng created successfully', dongeng: newDongeng });
    } catch (error) {
        console.error('Error creating video:', error);
        res.status(500).json({ message: 'Failed to create video', error: error.message });
    }
};

// **Get All dongengs**
const getDongengs = async (req, res) => {
    try {

        // Ambil semua video yang dibuat oleh user
        const dongengs = await Dongeng.findAll({

            attributes: ['id', 'title', 'video_link', 'description', 'thumbnail_link'],
            order: [['createdAt', 'DESC']], // Urutkan berdasarkan waktu pembuatan terbaru
        });

        res.status(200).json({ dongengs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve dongengs', error: error.message });
    }
};

// **Get Dongeng by ID**
const getDongengById = async (req, res) => {
    try {
        const videoId = req.params.id; // ID video dari URL params

        // Cari video berdasarkan ID
        const dongeng = await Dongeng.findOne({
            where: { id: videoId },
            attributes: ['id', 'title', 'video_link', 'description', 'thumbnail_link', 'createdBy', 'createdAt', 'updatedAt'],
        });

        if (!dongeng) {
            return res.status(404).json({ message: 'Dongeng not found' });
        }

        res.status(200).json({ dongeng });
    } catch (error) {
        console.error('Error retrieving video:', error);
        res.status(500).json({ message: 'Failed to retrieve dongeng', error: error.message });
    }
};


const updateDongeng = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const videoId = req.params.id; // ID video dari URL params
        const { title, video_link, thumbnail_link } = req.body;

        // Cari video berdasarkan ID dan validasi createdBy
        const video = await Dongeng.findOne({ where: { id: videoId, createdBy: userId } });

        if (!video) {
            return res
                .status(404)
                .json({ message: 'Dongeng not found or you are not authorized to update this video' });
        }

        // Validasi video_link jika ada
        let embedLink = video.video_link; // Default: gunakan link sebelumnya
        if (video_link) {
            if (!isValidYouTubeLink(video_link)) {
                return res.status(400).json({ message: 'Invalid YouTube link' });
            }
            embedLink = getEmbedUrl(video_link);
            if (!embedLink) {
                return res.status(400).json({ message: 'Failed to process YouTube link' });
            }
        }

        // Update hanya kolom yang diberikan
        if (title) video.title = title;
        if (video_link) video.video_link = embedLink;
        if (thumbnail_link) video.thumbnail_link = thumbnail_link;

        // Simpan perubahan
        await video.save();

        res.status(200).json({ message: 'Dongeng updated successfully', video });
    } catch (error) {
        console.error('Error updating video:', error);
        res.status(500).json({ message: 'Failed to update video', error: error.message });
    }
};

// **Delete Dongeng**
const deleteDongeng = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const videoId = req.params.id; // ID video dari URL params

        // Cari video berdasarkan ID dan validasi createdBy
        const video = await Dongeng.findOne({ where: { id: videoId, createdBy: userId } });

        if (!video) {
            return res.status(404).json({ message: 'Dongeng not found or you are not authorized to delete this video' });
        }

        // Hapus file video jika ada
        if (video.video_path) {
            const videoPath = path.join(__dirname, '../../../public/dongengs', video.video_path);
            if (fs.existsSync(videoPath)) {
                fs.unlinkSync(videoPath);
            }
        }

        // Hapus data video dari database
        await video.destroy();

        res.status(200).json({ message: 'Dongeng deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete video', error: error.message });
    }
};

module.exports = { upload, createDongeng, getDongengs, getDongengById, updateDongeng, deleteDongeng };