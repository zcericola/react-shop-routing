//products is simulating an external API like you used for no DB -- it's just a json file in the root of our project holding a big object of data
const products = require("./../../products.json");
//gets all the products
module.exports = {
  getAll(req, res) {
    //sends all the products back to the front end
    res.status(200).json(products.products);
  },
  //gets a single product using filter to match to our param
  getProduct(req, res) {
    const currentProduct = products.productDetails.filter(
      curr => curr.id == req.params.id
    );
    //sends the correct product back to the front end
    res.status(200).json(currentProduct);
  }
};
