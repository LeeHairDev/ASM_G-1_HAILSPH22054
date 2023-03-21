import mongoose from "mongoose";

const validateProducts = new mongoose.Schema({
    name: {
        type: String
    },
     price: {
        type: Number
    },
     title: {
        type: String
    }
})

export default mongoose.model("Product", validateProducts);