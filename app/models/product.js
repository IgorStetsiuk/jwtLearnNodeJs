let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ProductModel = {
    name: String,
    title: String,
    price: {
        type: Number,
        required: true
    }
};

module.exports = mongoose.model('product', ProductModel);