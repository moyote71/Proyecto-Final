import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    imagesURL: [{
        type: String,
        default: 'https://placehold.co/800x600.png',
    }],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product; 