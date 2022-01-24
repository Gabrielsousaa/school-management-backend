const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const database = require('../database/config/database')
const MongodbSession = require('connect-mongodb-session')(session);
const mongoUri = process.env.DATABASE_LOCALURL;


const store = new MongodbSession({
    uri: mongoUri,
    collection: 'Sessions'
})

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(session({
        secret: 'asidfjsdfglasdfçgaçdjfg',
        cookie: { maxAge: 30000 },
        resave: true,
        saveUninitialized: true,
        store: store
    }));

}




