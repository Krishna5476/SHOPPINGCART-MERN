// the require from node access the express
const express = require("express");
// the require from node access the cors
const cors = require("cors");
// getting the express method
const app = express();
// By using app.use(express.json());, you are telling your Express application to use the express.json() middleware for every incoming request. This is common when dealing with APIs that expect JSON data in the request body, as it allows you to conveniently access that data in a structured manner.

// accessing the module products
const products = require("./products");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running on ${port}`));
