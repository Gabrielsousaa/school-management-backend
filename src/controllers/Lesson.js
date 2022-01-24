const express = require('express');
const Lesson = require('../models/Lesson');
module.exports = {
    async store(req, res) {
        const { name } = req.body;

        var dataCreate = {}

        dataCreate = {
            name
        }

        const lessons = await Lesson.create(dataCreate);
        res.status(201).json("Matéria Inserida");
    },
    async findAll(req, res) {
        const lesson = await Lesson.find();
        res.json(lesson);
    }
}
