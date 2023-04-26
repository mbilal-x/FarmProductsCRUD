const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const ejs = require('ejs')

const Product = require('./models/product')

PORT = process.env.PORT || 3000

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

//RESTful routes
app.get('/', (req, res)=>{
    res.send('<h1>Welcome</h1>')
})

app.get('/products', async (req, res)=>{
    const products = await Product.find({})
    res.render('products/index', {products})
})


app.listen(PORT, ()=>{
    console.log('SERVER LISTENING ON PORT: ', PORT)    
})