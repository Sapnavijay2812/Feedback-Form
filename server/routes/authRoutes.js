const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, getAdmin } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/me', verifyToken, getAdmin);

module.exports = router;