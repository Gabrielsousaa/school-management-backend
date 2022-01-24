const express = require('express');

const Teacher = require('../models/Teacher');
const Lesson = require('../models/Lesson');


module.exports = {
    async findByEmail(req, res) {
        try {
            const { email } = req.body;
            const teacher = await Teacher.findOne({ email });

            if (teacher == null) {
                res.status(404).json("Usuario não encontrado")
            } else {
                res.json(teacher);
            }


        } catch (error) {

            res.status(500).json("Erro no servidor" + error.message)


        }

    },

    async findAll(req, res) {
        const teacher = await Teacher.find();
        res.json(teacher);
    },

    async store(req, res) {

        const { name, email, lessons } = req.body;
        const teacherEmail = await Teacher.findOne().where({ email })
        const lesson = await Lesson.find().where({ "name": lessons });
        console.log(lesson)
        if (teacherEmail == null) {
            if (lessons.length === lesson.length) {
                var dataCreate = {}

                dataCreate = {
                    name, email, lessons
                }

                const teacher = await Teacher.create(dataCreate);
                res.status(201).json(teacher)
            } else {

                const chamar = {
                    error: function () {
                        return this.Error;
                    }
                }
                const error1 = {
                    Error: res.status(404).json("Materia não Encontrada: " + lessons),
                }
            }
        } else {
            const chamar = {
                error: function () {
                    return this.Error;
                }
            }
            const error1 = {
                Error: res.status(404).json("Ja existe um email"),
            }
        }

    },

    async delete(req, res) {
        try {
            const { _id } = req.params;
            const teacher = await Teacher.findByIdAndDelete({ _id });
            res.status(202).json("Professor removido");
        } catch (err) {
            res.status(404).json("Professor não encontrado");
        }
    },

    async update(req, res) {

        const { name, email, lessons } = req.body;
        const teacherEmail = await Teacher.findOne().where({ email })
        const lesson = await Lesson.find().where({ "name": lessons });

        if (teacherEmail != null) {
            if (lessons.length === lesson.length) {
                var dataCreate = {}

                dataCreate = {
                    name, lessons
                }

                const teacher = await Teacher.findOneAndUpdate(dataCreate);
                res.status(201).json(teacher)
            } else {

                const chamar = {
                    error: function () {
                        return this.Error;
                    }
                }
                const error1 = {
                    Error: res.status(404).json("Materia não Encontrada: " + lessons),
                }
            }
        } else {
            res.status(404).json("Professor não encontrado");
        }
    }

}
