const express = require('express');
const { upload, createEvent, deleteEvent, getEventById, getEvents, updateEvent } = require('../../controllers/user/eventController');
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');


router.post('/events', authenticateJWT, upload.single('image_path'), createEvent);
router.get('/events', authenticateJWT, getEvents);
router.get('/events/:id', authenticateJWT, getEventById);
router.put('/events/:id', authenticateJWT, upload.single('image_path'), updateEvent);
router.delete('/events/:id', authenticateJWT, upload.none(), deleteEvent);

module.exports = router;
