const fs = require("fs");
const { Product } = require("../models");

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
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
  let newProduct = Product.build(req.body);
  newProduct = await newProduct.save();
  res.status(200).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
};

exports.getProductById = async (req, res) => {
  const foundProduct = await Product.findByPk(req.params.id);
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
  const foundProduct = await Product.findByPk(req.params.id);
  if (foundProduct) {
    foundProduct.update(req.body);
    res.status(200).json({
      status: "updated",
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

exports.deleteProduct = async (req, res) => {
  const foundProduct = await Product.findByPk(req.params.id);
  if (foundProduct) {
    foundProduct.destroy();
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