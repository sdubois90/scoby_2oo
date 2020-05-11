const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

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

router.post("/items/", (req, res) => {
  const { name, description, quantity } = req.body;
  const newItem = { name, description, quantity };
  Item.create(newItem)
    .then((itemDocument) => {
      res.status(201).json(itemDocument);
    })
    .catch((error) => {
      console.log(error);
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
