const express = require("express");

const path = require("path")

const app = express();

const port = 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"ex1.html"));
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"main.js"));
});

app.post("/submit-form",(req,res)=>{
    console.log(req.body);
    res.send("data receeived" + JSON.stringify(req.body));
});

app.listen(port, ()=>{  
    console.log("Server started http://localhost:"+port);
});

