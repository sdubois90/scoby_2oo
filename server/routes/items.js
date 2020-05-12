const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const upload = require("../config/cloudinary");

router.get("/items", (req, res) => {
  Item.find()
    .then((itemDocument) => {
      res.status(200).json(itemDocument);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/items/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((itemDocument) => {
      res.status(200).json(itemDocument);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/items", upload.single("image"), (req, res, next) => {
  console.log(req.body);
  // Validate req body before creating.
  const { name, description, category, quantity, location } = req.body;
  // You should really validate here
  const newItem = {
    name,
    description,
    category,
    quantity,
    location,
  };
  if (req.file) {
    newItem.image = req.file.secure_url;
  }
  Item.create(newItem)
    .then((dbRes) => {
      res.status(201).json(dbRes);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.patch("/items/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((itemDocument) => {
      res.status(200).json(itemDocument);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/items/:id", (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then((itemDocument) => {
      if (itemDocument === null) {
        res.status(404).json({ message: "Item not found" });
      } else {
        res.status(204).json(itemDocument);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
