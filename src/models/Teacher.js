const mongoose = require('mongoose');
const TeachersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true , unique: true  },
    lessons: { type: Array, required: true },
},
    {
        timestamps: true
    }
);

const Teacher = mongoose.model('teachers', TeachersSchema);

module.exports = Teacher;
