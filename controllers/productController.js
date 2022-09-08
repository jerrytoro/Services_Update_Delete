const fs = require("fs");

exports.getAllProducts = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );

  res.status(200).json({
    status: "success",
    timeOfRequest: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
};

exports.addProduct = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );
  products.push(req.body);
  fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));

  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
};

exports.getProductById = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );

  const foundProduct = products.find((p) => p.id == req.params.id);
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

exports.putProduct = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );
  const foundProduct = products.find((p) => p.id == req.params.id);
  if (foundProduct) {
    //products.splice(foundProduct,1,req.body);
    var newProducts = products.filter(function(f){
      return f !== foundProduct
    })
    newProducts.push(req.body);
    fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(newProducts));
    res.json({
      status: "updated"
    })
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
}

exports.deleteProduct = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );
  const foundProduct = products.find((p) => p.id == req.params.id);
  if (foundProduct) {
    var newProducts = products.filter(function(f){
      return f !== foundProduct
    })
    fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(newProducts));
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