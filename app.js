const express = require('express');
const app=express();

const productRoutes=require('./api/routes/products');
app.use('/products',productRoutes); //anything starting with /products will be forwared to this product OURtes url

module.exports= app;
// status 200 for verything ok



