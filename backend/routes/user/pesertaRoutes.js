const express = require('express');
const { upload, createPeserta, deletePeserta, getPesertaById, getPesertas, updatePeserta } = require('../../controllers/user/pesertaController');
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');


router.post('/pesertas', authenticateJWT, upload.single('image_path'), createPeserta);
router.get('/pesertas', authenticateJWT, getPesertas);
router.get('/pesertas/:id', authenticateJWT, getPesertaById);
router.put('/pesertas/:id', authenticateJWT, upload.single('image_path'), updatePeserta);
router.delete('/pesertas/:id', authenticateJWT, upload.none(), deletePeserta);

module.exports = router;
