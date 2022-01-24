const User = require('../models/User');
const bcrypt = require('bcrypt');
const session = require('express-session')
module.exports = {

    async findById(req, res) {
        try {
            const { _id } = req.params;
            const user = await User.findOne({ _id });
            res.json(user);
        } catch (error) {
            res.status(404).json("Usuario não encontrado")
        }

    },

    async findAll(req, res) {
        const user = await User.find();
        res.json(user);
    },

    async store(req, res) {
        const passhash = await bcrypt.hash(req.body.password, 10);
        const { name, email, password, admin } = req.body;

        var dataCreate = {}

        dataCreate = {
            name, email, password: passhash, admin
        }

        const users = await User.create(dataCreate);
        res.status(201).json("Cadastro Efetuado");
    },
    async delete(req, res) {
        try {
            const { _id } = req.params;
            const user = await User.findByIdAndDelete({ _id });
            res.status(202).json("Usuario removido");
        } catch (err) {
            res.status(404).json("Usuario não encontrado");
        }
    },

    async update(req, res) {
        try {
            const { _id, name, email } = req.body;

            var dataCreate = {}

            dataCreate = {
                name, email
            }

            const users = await User.findByIdAndUpdate({ _id }, dataCreate, { new: true });
            res.status(201).json(users);
        } catch (err) {
            res.json("Usuário não encontrado");
        }
    },
    async login(req, res) {

        const { email, password } = req.body;
        const user = await User.findOne().where({ email: email })
        if (user) {
            const ValidaPass = await bcrypt.compare(password, user.password)
            if (ValidaPass) {
                req.session.authenticated = true
                res.status(202).json(req.session)
            } else {
                res.status(403).json({ msg: 'Senha/Email Invalidos' })
            }

        } else {
            res.status(403).json({ msg: 'Usuario não encontrado' })
        }
    },
    async logout(req, res) {
        req.session.destroy((err) => {
            if (err) throw err;
            res.send('Logout feito com sucesso')
        });
    }

}