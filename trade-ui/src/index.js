const express = require("express");
const http = require("http");

const app = express();
const port = process.env.PORT || 80;
const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.send("You are connect to UI")
})



server.listen(port,()=>{
    console.log(`Connect to UI on port ${port}`)
})
