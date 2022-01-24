const express = require('express');
const app=express();

const productRoutes=require('./api/routes/product');
app.use('/products',productRoutes); //anything starting with /products will be forwared to this product OURtes url
//yaha app .orders ka dalna hia

//this is like a middle point where req will be checked and ek global error obj ban rha hai 
 // its like a middleware 
app.use((req,res,next)=>{
    const err=new Error('Not found') // "  " and ' ' both works, ' ' preferred
    err.status=404;
    next(err);//optional semicolon
})
//this is the last default point like of a switch case to be executed if no other route got

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.json({
        err: {
            message:err.message
        }
    })
  });//optional semicolon 
module.exports= app;
// status 200 for verything ok



