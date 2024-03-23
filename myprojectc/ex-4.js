const express =require('express');
const app=express();
const routes=require('./routes/ex-3')
app.use('/',routes);
app.listen(3000,()=>{
    console.log('server runing oprt 3000');
})