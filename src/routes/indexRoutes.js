const express = require('express');
const Index = require('../controllers/Index');
const router = express.Router();


router.get('/', Index.index);

module.exports = router;