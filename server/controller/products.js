const products = require("./../../products.json");
module.exports = {
  getAll(req, res) {
    res.status(200).json(products.products);
  },
  getProduct(req, res) {
    const currentProduct = products.productDetails.filter(
      curr => curr.id == req.params.id
    );
    res.status(200).json(currentProduct);
  }
};
