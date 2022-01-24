const express = require('express');

module.exports = {
    async index(req, res) {
        res.json('Bem vindo ao sistema de gerenciamento de alunos');
    }
}


