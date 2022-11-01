const express = require('express');
const  env=require('dotenv').config();
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require("mongoose");
const cors = require("cors")

const userRouter=require('./router/user')

const app = express();


app.use(cors())

app.use(logger('dev'));
app.use(express.json());


//change to config files
mongoose.connect(process.env.mongoURL).then((res) => {
  console.log("mongodb connected")
})


app.use('/',userRouter)



app.use(function (req, res, next) {
    next(createError(404));
  });
app.use(function (err,req, res, next) {
    res.json({err})
  });

const PORT=process.env.PORT||5000
app.listen(PORT, () =>
  console.log(` app listening on port ${PORT}!`),
);