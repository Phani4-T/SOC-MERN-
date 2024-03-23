const express =require("express");
const router=express.Router();
router.get('/',(req,res)=>{
    res.send(`Hello Welcome To the Website!..`);
})
router.get('/about',(req,res)=>{
    res.send(`Know more about us!...`);
})
router.get('/contact',(req,res)=>{
    res.send(`reach us  at below address,phone number!..`);
})
module.exports=router;