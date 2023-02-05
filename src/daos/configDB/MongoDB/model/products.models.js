import mongoose from "mongoose";

const productCollection = "productos"

export const productSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    }
)

export const ProductModel = mongoose.model(productCollection, productSchema);