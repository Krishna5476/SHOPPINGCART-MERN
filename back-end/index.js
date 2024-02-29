// the require from node access the express
const express = require("express");
// the require from node access the cors
const cors = require("cors");
// getting the express method
const app = express();
// By using app.use(express.json());, you are telling your Express application to use the express.json() middleware for every incoming request. This is common when dealing with APIs that expect JSON data in the request body, as it allows you to conveniently access that data in a structured manner.
const mongoose = require("mongoose");

const register = require("./routes/register");

// accessing the module products
require("dotenv").config();
const products = require("./products");
app.use(express.json());
app.use(cors());
app.use("/api/register", register);

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;

const uri = process.env.DB_URI;

app.listen(port, console.log(`server running on ${port}`));

mongoose
  .connect(uri)
  .then(() => console.log("mongodb connection successfull..."))
  .catch((err) => console.log("mongo connection failed", err.message));
