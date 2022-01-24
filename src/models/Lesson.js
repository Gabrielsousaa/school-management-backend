const mongoose = require('mongoose');


const LessonsSchema = new mongoose.Schema({
    name: { type: String, required: true}
},
    {
        timestamps: true
    }
);

const Lesson = mongoose.model('lessons', LessonsSchema);

module.exports = Lesson;
