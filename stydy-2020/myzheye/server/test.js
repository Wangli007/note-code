var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
});

var kittySchema = mongoose.Schema({
  name: String,
});

kittySchema.methods.speak = function () {  //kittySchema.methods 在使用模块的方式编译之前 必须将这个加入到模块中
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

var Kitten = mongoose.model("Kitten", kittySchema); 

var felyne = new Kitten({ name: "Felyne" });
console.log(felyne.name); // 'Felyne'

var Kitten = mongoose.model("Kitten", kittySchema);

var fluffy = new Kitten({ name: "fluffy" });

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});
