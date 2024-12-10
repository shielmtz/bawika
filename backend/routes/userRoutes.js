const express = require("express");
const router = express.Router();
const authenticateJWT = require('../middlewares/authMiddleware');


const { getAllUsers, getUserById, upload, updateUserData } = require("../controllers/userController");

router.get("/profile", authenticateJWT, upload.none(), getUserById);
router.get("/users", authenticateJWT, upload.none(), getAllUsers);
router.put("/users", authenticateJWT, upload.single('image_path'), updateUserData);

module.exports = router;
