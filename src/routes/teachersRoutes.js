const express = require('express');
const Teacher = require('../controllers/Teacher');

module.exports = router =>{
    router.get('/teachers/email', Teacher.findByEmail)
    router.get('/teachers', Teacher.findAll)
    router.post('/teachers', Teacher.store)
    router.put('/teachers', Teacher.update)
    router.delete('/teachers/:_id', Teacher.delete)
}