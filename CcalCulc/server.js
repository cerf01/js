
const express = require("express");

const path = require("path")

const app = express();

const port = 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.get('/index.html',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html')); 
 });

 app.get('/main.js',function(req,res){
     res.sendFile(path.join(__dirname + '/main.js')); 
 });

 app.get('/server.js',function(req,res){
    res.sendFile(path.join(__dirname + '/server.js')); 
});
 
app.get('/server.js',function(req,res){
    res.sendFile(path.join(__dirname + '/server.js')); 
});

app.listen(port, ()=>{  
    console.log("Server started http://localhost:"+port);
});
