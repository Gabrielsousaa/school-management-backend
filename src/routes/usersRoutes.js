const express = require('express');
const User = require('../controllers/User');

module.exports = router => {
    router.post('/users/login', User.login)
    router.post('/users/logout', User.logout)
    router.get('/users/:_id', User.findById)
    router.get('/users', User.findAll)
    router.post('/users', User.store)
    router.put('/users', User.update)
    router.delete('/users/:_id', User.delete)
}