const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique: true },
    age: {type: Number, required: true },
    height:{type:Number, required: true},
    weight:{type:Number, required: true},
    lessons:{type:Array, required: true, }
},
{
    timestamps: true
}
);

const Student = mongoose.model('students', StudentsSchema);

module.exports = Student;
