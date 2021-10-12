const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Você esqueceu de adicionar o nome da fruta!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit",
});

pineapple.save()

const person = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});

person.save()

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit",
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour",
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird texture",
});

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("As frutas foram salvadas com sucesso!");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "61633cee312bc3f594947b67"}, {name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("As frutas foram atualizadas com sucesso!");
//   }
// })

// Fruit.deleteOne({ _id: "61633d17b3fc82b06af35309" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("As frutas foram removidas com sucesso!");
//   }
// });

// Person.deleteMany({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deletado com sucesso!");
//   }
// });
