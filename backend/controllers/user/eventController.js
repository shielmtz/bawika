const { Event, Peserta } = require('../../associations'); // Pastikan path ini benar sesuai struktur project Anda
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Konfigurasi Multer untuk upload gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../D_B/public/image/event');
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

// **Create Event**
const createEvent = async (req, res) => {
    try {
        const { title, description, start_date, end_date, status } = req.body;
        const userId = req.userId; // ID pengguna yang sedang login

        if (!title || !start_date || !end_date || !status) {
            return res.status(400).json({ message: 'Title, start_date, end_date, and status are required.' });
        }

        const image_path = req.file ? `/image/event/${req.file.filename}` : null;

        const newEvent = await Event.create({
            title,
            description,
            image_path,
            start_date,
            end_date,
            status,
            createdBy: userId,
        });

        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Failed to create event', error: error.message });
    }
};

// **Get All Events**
const getEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            attributes: ['id', 'title', 'description', 'image_path', 'start_date', 'end_date', 'status', 'createdBy', 'createdAt', 'updatedAt'],
            include: [{
                model: Peserta,
                as: 'pesertas',
                attributes: ['name', 'ttl', 'image_path', 'id', 'alamat', 'no_handphone', 'email']
            }],
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json({ events });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Failed to retrieve events', error: error.message });
    }
};

// **Get Event by ID**
const getEventById = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findOne({
            where: { id: eventId },
            attributes: ['id', 'title', 'description', 'image_path', 'start_date', 'end_date', 'status', 'createdBy', 'createdAt', 'updatedAt'],
            include: [{
                model: Peserta,
                as: 'pesertas',
                attributes: ['name', 'ttl', 'image_path', 'id', 'alamat', 'no_handphone', 'email']
            }],
            order: [['createdAt', 'DESC']]
        });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json({ event });
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).json({ message: 'Failed to retrieve event', error: error.message });
    }
};

// **Update Event**
const updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const userId = req.userId;
        const { title, description, start_date, end_date, status } = req.body;

        const event = await Event.findOne({ where: { id: eventId, createdBy: userId } });

        if (!event) {
            return res.status(404).json({ message: 'Event not found or you are not authorized to update this event' });
        }

        if (title) event.title = title;
        if (description) event.description = description;
        if (start_date) event.start_date = start_date;
        if (end_date) event.end_date = end_date;
        if (status) event.status = status;

        if (req.file) {
            event.image_path = `/image/event/${req.file.filename}`;
        }

        await event.save();

        res.status(200).json({ message: 'Event updated successfully', event });
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Failed to update event', error: error.message });
    }
};

// **Delete Event**
const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const userId = req.userId;

        const event = await Event.findOne({ where: { id: eventId, createdBy: userId } });

        if (!event) {
            return res.status(404).json({ message: 'Event not found or you are not authorized to delete this event' });
        }

        await event.destroy();

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ message: 'Failed to delete event', error: error.message });
    }
};

module.exports = { upload, createEvent, getEvents, getEventById, updateEvent, deleteEvent };