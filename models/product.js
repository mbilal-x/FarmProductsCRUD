const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
price: {
    type: Number, 
    requird: true
},
category: {
    type: String,
    enum: ['fruits', 'vegetable', 'dairy']
}
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product

