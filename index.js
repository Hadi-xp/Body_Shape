const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config')
mongoose.connect('mongodb://localhost:27017/elhamStyle')
.then(()=>{console.log('connected to data base');})
.catch(()=>{console.log('not connected');})
const app = express();
app.use(express.json());
app.use(cors()); // enable CORS for all routes
const BodySize = require('./schema/userBodySize');

app.get('/testAPI',(req,res)=>{
    res.json({
        data:'this is a test msg'
    })
});




app.listen(config.get('serverPort'),()=>{
    console.log(`server is running on port ${config.get('serverPort')}`);
})
