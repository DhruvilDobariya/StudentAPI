const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./Models/Student");
const port = process.env.PORT || 8000;
const cors = require("cors");

const coreOptions = {
    origin : "*",
    methode : ["GET","POST","PUT","DELETE"],
    optionsSuccessStatus: 200
}

app.use(cors(coreOptions));

app.use(express.json());
  
// Get all student
// Using async await.
app.get("/students",async (req,res)=>{
    try{
        const student = await Student.find();
        res.send(student);
    }
    catch{
        rep.send(e);
    }
})

// Get student by id
app.get("/student/:id",async (req,res)=>{
    console.log(req,body)
    try{
        const _id = req.params.id;
        const student = await Student.findById(_id);
        if(!student){
            rep.status(404).send("Student not found.");
        }
        else{
            res.send(student);
        }
    }
    catch{
        res.send(e);
    }
    
})

// Post student
// Using Promises.
app.post("/students",(req,res)=>{
   const student = new Student(req.body)
    student.save()
    .then(()=>{
        res.status(201).send("Student Added Successfully.");
    })
    .catch((e)=>{
        res.send("Invalid Input. " + e);
    })
})

// Update Student
app.put("/student/:id",async (req,res)=>{
    console.log(req.body)
    const _id = req.params.id;
    try{
        const student = await Student.findByIdAndUpdate(_id,req.body);
        if(!student){
            res.status(404).send("Student not found.");
        }
        else{
            res.send("Student Updated Successfully.");
        }
    }
    catch{
        res.send(e);
    }
})

// Delete Student
app.delete("/student/:id",async (req,res)=>{
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student){
            res.status(404).send("Student not found.");
        }
        else{
            res.send("Student deleted successfully.");
        }
    }
    catch{
        res.send(e);
    }
})

app.listen(port,()=>{
    console.log("Connection is setup with " + port);
});