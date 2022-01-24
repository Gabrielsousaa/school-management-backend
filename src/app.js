require('dotenv').config();
const session = require('express-session')
const app = require('express')();
const consign = require('consign')

consign({cwd: 'src'}).include('./middlewares/middleware.js').into(app)

const indexRoutes = require('./routes/indexRoutes');
const studentsRoutes = require('./routes/studentsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const teachersRoutes = require('./routes/teachersRoutes')
const lessonsRoutes = require('./routes/lessonsRoutes')

app.use(indexRoutes);
app.use(studentsRoutes);
app.use(usersRoutes);
app.use(teachersRoutes);
app.use(lessonsRoutes)


//SERVER
app.listen(process.env.DATABASE_PORT || 3005, function () {
    console.log('Server Running...' + ' in port:' + process.env.DATABASE_PORT)
})

