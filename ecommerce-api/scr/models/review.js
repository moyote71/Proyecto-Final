import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment:{
        type:String,
        max:500,
    },
});

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review; 