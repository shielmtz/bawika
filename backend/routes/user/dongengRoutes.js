const express = require('express');
const { upload, createDongeng, getDongengs, updateDongeng, deleteDongeng, getDongengById } = require('../../controllers/user/dongengController');
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');


router.post('/dongengs', authenticateJWT, upload.none(), createDongeng); // Upload video
router.get('/dongengs', getDongengs); // Get all videos
router.get('/dongengs/:id', getDongengById); // Get all videos
router.put('/dongengs/:id', authenticateJWT, upload.none(), updateDongeng); // Update video
router.delete('/dongengs/:id', authenticateJWT, upload.none(), deleteDongeng); // Delete video

module.exports = router;
