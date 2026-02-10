const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');

router.post('/generate-text', aiController.generateText);
router.post('/generate-code', aiController.generateCode);
router.post('/multimodal', aiController.handleMultimodal);

module.exports = router;
