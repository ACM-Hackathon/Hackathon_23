const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const bcrypt = require("bcrypt");


const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/orders');
const userRoutes=require('./api/routes/user');

mongoose.connect('mongodb+srv://om7057:'+ process.env.MONGO_ATLAS_PW +'@krushisamwardhan.i9du1e5.mongodb.net/?retryWrites=true&w=majority')

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Contol-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-with,Content-TypeError,Accept,Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,PATCH');
        return res.status(200).json({});
    }
    next();
});
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
});
app.use((error,req,res,next)=>{
   res.status(error.status||500);
   res.json({
    error:{
        message:error.message
    }
    
   })
});
module.exports=app;