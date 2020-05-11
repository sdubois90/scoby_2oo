const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.patch("/me", (req, res, next) => {
  if (req.session.currentUser) {
    const id = req.session.currentUser._id;
    User.findById(id)
      .then((userDocument) => {
        const userObj = userDocument.toObject();
        delete userObj.password;
        res.status(200).json(userObj);
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

module.exports = router;
