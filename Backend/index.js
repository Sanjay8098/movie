import express from 'express'
// import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import config from './config/config.js'
import User from './router/userRoute.js'
// dotenv.config()
import cors from 'cors';
const app=express();
config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(cors())

app.use('/api',cors(),User)

const port=process.env.port || 3003
app.listen(port,()=>{
    console.log(`port is running in ${port}`);
})