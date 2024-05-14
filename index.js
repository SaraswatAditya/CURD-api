const port = 3000;
const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

require('dotenv').config(); // Load environment variables from .env file
const password = process.env.pass;



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API !");
});

//Add

//Display all

//Display selected

//update product

//delete

mongoose
  .connect(
    `mongodb+srv://adityasaraswatdev:${password}@backenddb.lg7zc2o.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("MongoDB got connected !");
    // console.log("PASSWORD IS ",password);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed  ");
  });


