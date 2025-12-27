const dotenv=require("dotenv")
const mongoose=require("mongoose")

dotenv.config()

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.URL)
        console.log("MongoDB connected Succcessfully")
    }catch(err){
        console.log("Error in connecting to MongoDB",err)
    }
}

module.exports=connectDB