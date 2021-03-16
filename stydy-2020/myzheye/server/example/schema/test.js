const mongoose = require("mongoose");
const Schema = mongoose.Schema; // 申明scheme
const kittySchema = new Schema(
  {
      name:String
  },
  {
    collections: "Kitty",
  }
);

var Kitten = mongoose.model("Kitty", kittySchema);

var felyne = new Kitten({ name: 'Felyne' });
console.log(felyne.name); // 'Felyne'