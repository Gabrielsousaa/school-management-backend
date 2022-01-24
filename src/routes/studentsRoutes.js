//students routes
const express = require('express');
const Student = require('../controllers/Student');
const router = express.Router();


router.get('/students/:_id', Student.findById)
router.get('/students', Student.findAll)
router.post('/students', Student.store)
router.put('/students', Student.update)
router.delete('/students/:_id', Student.delete)


module.exports = router;

