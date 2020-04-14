const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const usersRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../build')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('MongoDB database connection established successfully')
})

app.use('/users',usersRouter);
app.use('/exercise',exerciseRouter);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})