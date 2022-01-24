const express = require('express');
const Student = require('../models/Student');
module.exports = {
    async findById(req, res) {
        try {
            const { _id } = req.params;
            const student = await Student.findOne({ _id });
            res.json(student);
        } catch (error) {
            res.status(404).json("Estudante não encontrado")
        }

    },

    async findAll(req, res) {
        const student = await Student.find();
        res.json(student);
    },

    async store(req, res) {
        const { name, email, age,height,weight,lessons } = req.body;

        var dataCreate = {}

        dataCreate = {
            name, email, age, height, weight, lessons
        }

        const users = await Student.create(dataCreate);
        res.status(201).json("Estudante Efetuado");
    },
    async delete(req, res) {
        try {
            const { _id } = req.params;
            const student = await Student.findByIdAndDelete({ _id });
            res.status(202).json("Estudante removido");
        } catch (err) {
            res.status(404).json("Estudante não encontrado");
        }
    },

    async update(req, res) {
        try {
            const { _id, name, email } = req.body;

            var dataCreate = {}

            dataCreate = {
                name, email
            }

            const student = await Student.findByIdAndUpdate({ _id }, dataCreate, { new: true });
            res.status(201).json(student);
        } catch (err) {
            res.json("Estudante não encontrado");
        }
    }

}