// require("dotenv").config();
// const mongoose = require("mongoose");
// const Items = require("../models/Item");

// const item = [
//   {
//     name: "Plant",
//     description: "A mysterious plant",
//     category: "Plant",
//     quantity: 3,
//     address: "15 rue de la République",
//   },
// ];

// mongoose
//   .connect("mongodb://localhost/scoby", { useNewUrlParser: true })
//   .then((self) => {
//     console.log(`Connected to ${self.connection.name}`);

//     // Seeds
//     Items.create(item)
//       .then((dbResponse) => {
//         console.log(dbResponse);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(`Error occured while connecting to the Database ${err}`);
//   });
