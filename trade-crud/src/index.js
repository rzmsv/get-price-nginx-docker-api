const express = require("express");
const mongoose = require("mongoose")
const http = require("http");
const price = require("../routes/price")
const priceAPi = require("../controllers/post/postPrice")
const app = express();
const port = process.env.PORT || 80;
const server = http.createServer(app);

mongoose.connect("mongodb://mongo:27017/trade",{ useNewUrlParser: true , useUnifiedTopology:true})
.then(()=>{
    console.log("connect to database")
})
.catch(err => console.log("I Cant Connect to database!"))


priceAPi.postPrice()
app.use(price)




server.listen(port,()=>{
    console.log(`Connect to BackEnd on port ${port}`)
})
