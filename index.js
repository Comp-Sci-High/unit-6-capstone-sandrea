const mongoose = require("mongoose");
const express = require("express");
const { name } = require("ejs");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

const assignmentSchema = new mongoose.Schema(
    {
         name: { type: String, required: true },
         description: { type: String },
         grade: { type: Number, default: 0 },
         completionStatus: { type: Boolean, default: false }
    }
);

const Assignment = mongoose.model("Assignment", assignmentSchema, "Assignments");

let assignmentList = [""]


app.get("/", async (req, res) => {
    const assignments = await Assignment.find({});
    res.render("index.ejs", assignments);
});


app.patch("/user/:name", async (req,res) =>{
    const res = await Assignment.findOneAndUpdate({name: req.params.name}, {req:body}, {new:true})
    res.render("assignments.ejs", res)


app.delete("/user/:name", async (req,res) =>{
    const res = await Assignment.findOneAndDelete({name: req.params.name})
    res.render("assignments.ejs", res)
})















async function startServer() {
    // Add your SRV string, make sure that the database is called SE12
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.2jxgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    // Uncomment this and run ONCE to add some students for editing and deleting
    //prepopulateDb()

    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}

startServer();








