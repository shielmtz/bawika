const express = require('express');
const { upload, createMusic, getAllMusics, updateMusic, deleteMusic, getMusicById } = require('../../controllers/user/musicController');
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');
const uploadFields = upload.fields([
    { name: 'imagePath', maxCount: 1 },
    { name: 'audioPath', maxCount: 1 },
]);

router.post('/musics', authenticateJWT, uploadFields, createMusic); // Upload video
router.get('/musics', getAllMusics); // Get all videos
router.get('/musics/:id', getMusicById); // Get all videos
router.put('/musics/:id', authenticateJWT, uploadFields, updateMusic); // Update video
router.delete('/musics/:id', authenticateJWT, upload.none(), deleteMusic); // Delete video

module.exports = router;
