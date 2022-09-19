const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique:true,
    },
    status: {
        type: String,
    },
    products: {
        type: [],
        required: true,
    },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;