const express = require('express');
const multer = require('multer')
const { createCategory, getCategories, updateCategory, deleteCategory, getCategoryById } = require('../../controllers/user/catgeoryController');
const router = express.Router();
const upload = multer();
const authenticateJWT = require('../../middlewares/authMiddleware');


router.post('/categories', authenticateJWT, upload.none(), createCategory); // Upload video
router.get('/categories', getCategories); // Get all videos
router.get('/categories/:id', getCategoryById); // Get all videos
router.put('/categories/:id', authenticateJWT, upload.none(), updateCategory); // Update video
router.delete('/categories/:id', authenticateJWT, upload.none(), deleteCategory); // Delete video

module.exports = router;
