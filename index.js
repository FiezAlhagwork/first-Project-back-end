
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.route.js")
require('dotenv').config();


const app = express();
const PORT = 5000
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products" , ProductRoute)

//.env
const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD;



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    `mongodb+srv://${username}:${password}@prodcts.0jr5f.mongodb.net/Node-API?retryWrites=true&w=majority&appName=prodcts`
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () =>
      console.log(`Server Running on Port : http://localhost${PORT}`)
    );
  })
  .catch(() => {
    console.log("Connected to failed");
  });
