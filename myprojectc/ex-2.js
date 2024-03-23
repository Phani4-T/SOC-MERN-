const port=3000;
const express =require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send(`Hello Welcome To the Website!..`);
})
app.get('/about',(req,res)=>{
    res.send(`Know more about us!...`);
})
app.get('/contact',(req,res)=>{
    res.send(`reach us  at below address,phone number!..`);
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})