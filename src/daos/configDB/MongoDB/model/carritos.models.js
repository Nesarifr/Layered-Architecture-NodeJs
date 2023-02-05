import mongoose from "mongoose";
import { productSchema } from "./products.models.js";

const carritoCollection = "carritos"
const carritoSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            default: 0
        },
        productos: {
            type: [productSchema],
            default: undefined,
            required: true
        }
    }
)

export const carritoModel = mongoose.model(carritoCollection, carritoSchema);