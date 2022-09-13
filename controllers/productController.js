const fs = require("fs");
const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    status: "success",
    timeOfRequest: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
};

exports.addProduct = async (req, res) => {
  const newproduct = await Product.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      product: newproduct,
    },
  });
};

exports.getProductById = async (req, res) => {
  const foundProduct = await Product.findById(req.params.id);
  if (foundProduct) {
    res.status(200).json({
      status: "success",
      data: {
        product: foundProduct,
      },
    });
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
};

exports.putProduct = async (req, res) => {
  const foundProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (foundProduct) {
    res.status(200).json({
      status: "updated"
    })
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
}

exports.deleteProduct = async (req, res) => {
  const foundProduct = await Product.findByIdAndRemove(req.params.id);
  if (foundProduct) {
    res.status(200).json({
      status: "delete",
      data: {
        product: foundProduct,
      },
    })
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
}