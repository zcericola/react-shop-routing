const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const products = require("./controller/products");

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.get("/api/products", products.getAll);
app.get("/api/getProduct/:id", products.getProduct);

app.listen(port, () => console.log(`Listening on port: ${port}`));
