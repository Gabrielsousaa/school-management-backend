const express = require('express');
const Lesson = require('../controllers/Lesson');

module.exports = router => {
    router.get('/lessons', Lesson.findAll);
    router.post('/lessons', Lesson.store);
}


