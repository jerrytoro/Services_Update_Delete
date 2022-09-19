const fs = require("fs");
const Cart = require("../models/Cart");
const User = require("../models/User");
const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync");

exports.addProductcart = catchAsync(async (req, res) => {
    const createshoppingCart = await Cart.create(req.body);
    res.status(200).json({
        status: "success",
        data: {
            cart: createshoppingCart,
        },
    });
});

exports.deleteProductcart = catchAsync(async (req, res) => {
    const foundProductcart = await Cart.findByIdAndDelete(req.params.id);
    if (foundProductcart) {
        res.status(200).json({
            status: "delete",
            data: {
                cart: foundProductcart,
            },
        });
    } else {
        res.status(404).json({
            status: "not found",
        });
    }
});

exports.payProductcart = catchAsync(async (req, res) => {

});