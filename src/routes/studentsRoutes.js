const express = require('express');
const Student = require('../controllers/Student');


module.exports = router =>{
    router.get('/students/:_id', Student.findById)
    router.get('/students', Student.findAll)
    router.post('/students', Student.store)
    router.put('/students', Student.update)
    router.delete('/students/:_id', Student.delete)
}

