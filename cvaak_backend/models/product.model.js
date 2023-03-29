const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    "title": String,
    "src": String,
    "packsize": String,
    "price": Number,
    "strike-price": String,
    "discount-percent": String,
    "maxQty": Number,
    "rating": String,
    "CardRatingDetail": String,
    "description": String,
    "category": String
}, {
    versionKey: false
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel