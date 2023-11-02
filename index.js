const express = require("express");

//init
const app = express();

//use json to send data
app.use(express.json());



//create api
//receive information by hello api

//login
const dataSignup = [];
app.get("/signup", (req, res) => {
    res.status(200).send(dataSignup);
    return;
});
app.post("/signup", (req, res) => {
    let data = req.body;
    dataSignup.push(data);
    res.status(201).send(dataSignup);
    return;
});


//listen request
app.listen({port:3000}, () => {
    console.log("server is running");
});