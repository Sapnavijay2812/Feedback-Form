const express = require('express');
const router = express.Router();
const { createForm, getFormById, getFormsByAdmin } = require('../controllers/formController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/create', verifyToken, createForm);
router.get('/:formId', getFormById);
router.get('/admin/:adminId', verifyToken, getFormsByAdmin);

module.exports = router;