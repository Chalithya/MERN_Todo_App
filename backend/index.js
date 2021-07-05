const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT =  3030;
const app =  express();
const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/todolist", connectionOptions)
    .then(()=>console.log("Conected to DB Successfully"))
    .catch((err)=> console.error(err)); 

    // this middleware accepts request and parses it to json format
app.use("/todos", todoRoutes);



app.listen(PORT, ()=>{
    console.log("The server is lisstning on port: "+PORT);
});