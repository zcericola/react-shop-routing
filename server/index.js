const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const products = require("./controller/products");

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

//gets all the products
app.get("/api/products", products.getAll);

//This endpoint has a url param, we can access it using req.params.id
//This endpoint will return whatever product matches our id
app.get("/api/getProduct/:id", products.getProduct);

app.listen(port, () => console.log(`Listening on port: ${port}`));
