const express = require('express');
const Teacher = require('../controllers/Teacher');
const router = express.Router();

//students routes
router.get('/teachers/email', Teacher.findByEmail)
router.get('/teachers', Teacher.findAll)
router.post('/teachers', Teacher.store)
router.put('/teachers', Teacher.update)
router.delete('/teachers/:_id', Teacher.delete)


module.exports = router;