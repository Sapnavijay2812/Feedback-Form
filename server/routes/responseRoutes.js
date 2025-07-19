const express = require('express');
const router = express.Router();
const { submitResponse, getResponsesByFormId } = require('../controllers/responseController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/:formId', submitResponse);
router.get('/:formId', verifyToken, getResponsesByFormId);

module.exports = router;