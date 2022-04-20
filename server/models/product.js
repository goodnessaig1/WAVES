const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        // unique: true,
        maxlength: 100
    },
    description:{
        type: String,
        required: true,
        maxlength: 100000
    },
    price:{
        required: true,
        type: Number,
        maxlength: 250
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    shipping:{
        required: true,
        type: Boolean
    },
    available:{
        required: true,
        type: Boolean 
    },
    wood:{
        type: Schema.Types.ObjectId,
        ref: 'Wood',
        required: true
    },
    frets:{
        required: true,
        type: Number
    },
    sold:{
        type: Number,
        maxlength: 100,
        default:0
    },
    publish:{
        required: true,
        type: Boolean
    },
    images:{
        type: Array,
        default:[]
    }
},{timestamps: true});

const Product = mongoose.model('Product', productSchema);
module.exports = { Product }