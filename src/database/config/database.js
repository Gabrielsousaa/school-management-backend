require('dotenv').config();
const mongoose = require('mongoose');
const mongoUri = process.env.DATABASE_LOCALURL;

mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, function (err) {
    if (err) {
        console.log('Error connecting to database' + err)
    } else {
        console.log('Success connecting to database...')
    }
})
