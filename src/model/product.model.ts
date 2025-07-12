/*
export interface Product {
    id: number;
    name: string;
    price: number;
    currency: string;
    img: string;
}*/

import mongoose from "mongoose";

// Define the schema
const ProductModel = new mongoose.Schema({
        "id": {
            type: Number,
            required: true, // like not null
            unique: true, // Unique key constraint
            index: true // for better performance
        },
        "name": {
            type: String,
            required: true,
        },
        "price": {
            type: Number,
            required: true,
        },
        "currency": {
            type: String,
            required: true,
        },
        "img": {
            type: String,
            required: true,
        }
    }
);

// Create the model
const Product = mongoose.model("Product", ProductModel);

// Export the model
export default Product;
