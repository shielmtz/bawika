const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const dongengRoutes = require('./user/dongengRoutes');
const pembelajaranRoutes = require('./user/pembelajaranRouter');
const categoryRoutes = require('./user/categoryRoutes');
const musicRoutes = require('./user/musicRoutes');
const eventRoutes = require('./user/eventRoutes');
const pesertaRoutes = require('./user/pesertaRoutes');

router.use(authRoutes);
router.use(dongengRoutes);
router.use(pembelajaranRoutes);
router.use(categoryRoutes);
router.use(musicRoutes);
router.use(eventRoutes);
router.use(pesertaRoutes);
router.use(userRoutes);

module.exports = router;
