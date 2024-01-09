require("dotenv").config();
const exp = require('express')
const app = exp();
const PORT = process.env.PORT || 5000;

const connectDB = require('./db/connect')

const product_routes = require('./routes/products')

app.get("/",(req , res)=>{
    res.send("hi i m live");
})

app.use("/api/products" , product_routes)

const start = async () =>{
    try{
        await connectDB();
app.listen(PORT , ()=>{console.log(`${PORT} yes i m connected`)})
}catch(error){console.log(error)}
}

start();