const mongoose=require("mongoose")
const dotenv=require("dotenv")
const express=require("express")
const connectDB=require("./config/Db")
const UserRoutes=require("./routes/UserRoutes")

dotenv.config()

const app=express()
app.use(express.json())
app.use("/api",UserRoutes)


const os = require("os");

app.get( (req, res) => {
  res.json({
    message: "Response from backend",
    hostname: os.hostname(),
    pid: process.pid,
    time: new Date().toISOString()
  });
}); 


connectDB()




module.exports=app




