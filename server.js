const express =  require("express");
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

app.get('/', (req, res) => {
    res.send('Get infor Hello G');
});

app.listen(3000, (req, res) => {
    console.log('Node api running on port 3000');
});

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://giangt1999_db_user:BOUVTvQZXBHNKGIo@giangtongapi.qq09u5c.mongodb.net/?appName=GiangTongAPI')
.then(() => {
    console.log('Connect mongo database');
}).catch((error) => {
    console.log(error);
});

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// get all list product
app.post('/product', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

app.get('/product', async(req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//get by id
app.get('/product/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// update
app.put('/product/:id', async(req, res) => {
    try {
        debugger;
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// delete
app.delete('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
