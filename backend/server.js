const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const router = require('./routes/routes')
const app = express();
require('dotenv').config();
const port = process.env.port || 5000
require('./config/server').connect();
app.use(cors());
app.use(express.json());
app.use('/api',router)



app.listen(port ,()=>{
    console.log(`listening at port ${port}`)
})
