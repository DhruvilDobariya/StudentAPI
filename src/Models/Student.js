const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    RollNo : {
        type:Number,
        required:true,
        unique:true,
        minlength:3,
        maxlength:3
    },
    Name : {
        type:String,
        required:true
    },
    Email : {
        type:String,
    },
    ContactNo : {
        type : Number,
        minlength:10
    }
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;