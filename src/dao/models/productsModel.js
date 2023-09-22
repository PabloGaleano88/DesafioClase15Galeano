import mongoose from 'mongoose'

const productsCollection = "products"

const productsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    code:{
        type: String,
        unique: true,
        required: true
    },
    status:{
        type: Boolean
    },
    category:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    thumbnail: {
        type: Array,
        required: true
    }
})

const productsModel = mongoose.model(productsCollection,productsSchema)

export {productsModel}
