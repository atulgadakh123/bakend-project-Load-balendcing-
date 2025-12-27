const User = require("../model/User");
// const Redis=require("../config/Redis")

// CREATE USER
exports.createUser = async (req, res) => {
  try {    
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    
 res.status(500).json({message:error.message})
  }
};
     

//GEt Users

exports.getUsers=async(req,res)=>{
    try{
        // const cacheResults=await Redis.get("users")
        // if(cacheResults){
        //     return res.status(200).json(JSON.parse(cacheResults))
        // }
        const users=await User.find()
        //  await Redis.set(
        //      "users",
        //    60,
        //      JSON.stringify(users)
        //  );
        console.log("Data from MongoDB")
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
