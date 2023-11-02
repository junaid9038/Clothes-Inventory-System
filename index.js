// import express from 'express';
// const express = require('express')
// import express from 'express';
import express from 'express';
import ProductController from './src/controller/product_controller.js';

const app = express();

const productController = new ProductController();

app.get('/',productController.getProduct);
app.use(express.static('src/views'));


app.listen(8000,()=>{
    console.log('server is runing in the port 8000');
})