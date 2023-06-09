const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const ejs = require('ejs')
const methodOverride = require('method-override')

const Product = require('./models/product')

PORT = process.env.PORT || 3000
const categories = ['fruits', 'vagetable', 'dairy', 'fungi']

mongoose.connect('mongodb://127.0.0.1:27017/farmdb')
    .then(()=>{
        console.log('MONGO CONNECTION OPEN!!!')
    })
    .catch((err)=>{
        console.log('OH NO MONGO CONNECTION ERROR!!!')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))    
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//RESTful routes
app.get('/', (req, res)=>{
    res.send('<h1>Welcome</h1>')
})
// show all products
app.get('/products', async (req, res)=>{
    const {category} = req.query
    if(category){
        const products = await Product.find({ category })
        res.render('products/index', {products, category})
    }
    else{
        const products = await Product.find({})
        res.render('products/index', {products, category: 'All'})
    }
    
})
// create new products
app.get('/products/new', (req, res)=>{
    res.render('products/new', {categories})
})
// create new product post req handler
app.post('/products', async (req, res)=>{
    // console.log(req.body)
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect('/products')
})  

// show a specific product by id
app.get('/products/:id', async (req, res)=>{
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('products/details', {product})
})
// edit a product
app.get('/products/:id/edit', async (req, res)=>{
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('products/edit', {product, categories})
})
app.put('/products/:id', async (req, res)=>{
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidator: true, new: true})
    product.save()
    res.redirect('/products')
})

// deleting a product
app.delete('/products/:id', async (req, res)=>{
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})



app.listen(PORT, ()=>{
    console.log('SERVER LISTENING ON PORT: ', PORT)    
})



// samples
// {
//     _id: ObjectId("6448b895e858c172aa28f93d"),  
//     name: 'Chocolate Whole Milk',
//     price: 2.69,
//     category: 'dairy',
//     __v: 0
//   },
//   {
    // _id: ObjectId("6448b895e858c172aa28f93e"),  
//     name: 'Organic Celery',
//     price: 1.5,
//     category: 'vegetable',
//     __v: 0
//   }

