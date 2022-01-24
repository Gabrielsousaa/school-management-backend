require('dotenv').config();
const express = require('express');
const session = require('express-session')
const app = express();
const router = express.Router();

const consign = require('consign')

consign({cwd:'src' }).include('./middlewares/middleware.js').then('./routes/').into(app,router)

//SERVER
app.listen(process.env.DATABASE_PORT || 3005, function () {
    console.log('Server Running...' + ' in port:' + process.env.DATABASE_PORT)
})

