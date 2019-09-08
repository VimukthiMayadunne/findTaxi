const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
//var blacklist = require('express-jwt-blacklist');
//const user = require('./web/routes');
const config = require('./config/database');

const connectDB = mongoose.connect(config.database, { useNewUrlParser: true },(err)=>{
    if(err){
      console.log('-------------------------------');  
      console.log("Warning! Database not connected");
    }else{
      console.log("Database connected"); 
    }
});

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();
});


app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());


app.use('/taxi',require('./routes/taxi'));
app.use('/driver',require('./routes/driver'));



var server = require('http').Server(app); 


server.listen(4100,function(){
    console.log("Listning on Port 4400");
});

