const express = require('express');
const Index = require('../controllers/Index');

module.exports = router =>{
    router.get('/', Index.index);
}

