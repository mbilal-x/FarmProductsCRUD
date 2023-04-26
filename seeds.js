const mongoose = require('mongoose')

// requiring the product model
const product = require('./models/product')
// connection to farmdb in mongo
mongoose.connect('mongodb://127.0.0.1:27017/farmdb')
    .then(()=>{
        console.log('MONGO CONNECTION OPEN!!!')
    })
    .catch((err)=>{
        console.log('OH NO MONGO CONNECTION ERROR!!!')
        console.log(err)
    })

// some seed [sample] products
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Meion',
        price: 4.99,
        category: 'fruits'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    }
]


product.insertMany(seedProducts)
    .then(p=>{
        console.log(p, 'saved to farmdb!!!')
    })
    .catch(e=>{
        console.log(e)
    })

