const express = require("express");
const app = express();
app.use(express.json());
// backend server

const BACKEND_SERVER = [
  "http://backend:3000"
]
// IMPORTANT: body parser (even GET is fine)

  
let current=0;

app.use( async (req, res) => {
  try {
    // exact same URL forward
    const targetUrl = BACKEND_SERVER [current]
    current =(current + 1) % BACKEND_SERVER.length

    const response = await fetch(targetUrl+ req.originalUrl)
     const data= await response.text();
   
        //  res.send(data);
        
    res.json(response.data)
   
    // res.status(response.status).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "LB → Backend forwarding failed" });
  }})


app.listen(3000, () => {
  console.log("LOAD BALANCER running on port 3000");
});
