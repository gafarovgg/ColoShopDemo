const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
const port = 8080;

const DB_URL =
  "mongodb+srv://gafarovgg:azmp101@cluster0.plvuev0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const ShopSchema = new Schema({
  title: { type: String, require: true },
  oldPrice: { type: Number, require: true },
  newPrice: { type: Number, require: true },
  imageUrl: { type: String, require: true },
});

const ShopModel = mongoose.model("ShopModel", ShopSchema);

app.get("/api/products", async (req, res) => {
  try {
    const products = await ShopModel.find({});
    if (products.length > 0) {
      res.status(200).send({ message: "successfull", data: products });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ShopModel.findById(id);
    if (id) {
      res.status(200).send({ message: "successfull", data: product });
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await ShopModel.findByIdAndDelete(id);
    res
      .status(200)
      .send({ message: "deleted successfully", data: deletedProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/api/products", async (req, res) => {
  try {
    const newShop = new ShopModel(req.body);
    await newShop.save();
    res.status(201).send({ message: "post", data: newShop });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
  console.log("Connected!");
});
