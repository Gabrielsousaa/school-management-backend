const express = require('express');
const Lesson = require('../controllers/Lesson');
const router = express.Router();

router.get('/lessons', Lesson.findAll);
router.post('/lessons', Lesson.store);

module.exports = router;