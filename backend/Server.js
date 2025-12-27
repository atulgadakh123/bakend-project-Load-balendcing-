const dotenv=require("dotenv")
const app=require("./App")
dotenv.config()

app.get("/",(req,res)=>{
    res.json({
        message:"Server is running",
        server:process.env.Server_Name,
        port:process.env.PORT||3000
    })
})
app.get("/health",(req,res)=>{
      res.status(200).send("OK")
})


const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`${process.env.Server_Name}Server is running on port ${PORT}`)
})

module.exports=app


