const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
const _ = require('lodash');
mongoose.connect('mongodb://localhost:27017/elhamStyle')
.then(()=>{console.log('connected to data base');})
.catch(()=>{console.log('not connected');})
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const BodySize = require('./schema/userBodySize');

app.post('/getSize',async (req,res)=>{
    let userSize = new BodySize(
        _.pick(req.body,['Name','Email','Bust','Waist','Hip','HighHip','bodyShape'])
    )
    userSize = await userSize.save();
    res.json({data:userSize,msg:'your size saved'})

})



app.listen(config.get('serverPort'),()=>{
    console.log(`server is running on port ${config.get('serverPort')}`);
})
