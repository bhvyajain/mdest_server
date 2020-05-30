const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
var app=express()

app.use(bodyParser.json());
const  postroutes = require('./routes/posts');
const  userroutes = require('./routes/user')
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,Authorization, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST,PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});
mongoose.connect(
  "mongodb+srv://amrutha:cuGYv1Ty5GklagAq@cluster0-jmxdz.mongodb.net/mode-stack?retryWrites=true&w=majority"
  ).then(()=>
  {
      console.log('sucesss');
  })
  .catch((err)=>{
      console.log('fail',err);
  }
  )
  app.use('/',postroutes);
  app.use('/',userroutes)
  app.listen(process.env.PORT || 8030);