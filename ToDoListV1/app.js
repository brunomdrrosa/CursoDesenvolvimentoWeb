const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

const itens = ["Tomar banho", "Tomar café da manhã"];
const itensTrabalho = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let dia = date.getData();
  res.render("list", { diaSemanaEJS: dia, novosItensListaEJS: itens });
});

app.post("/", function (req, res) {
  let item = req.body.novoItem;
  console.log(req.body);

  if (req.body.list === "Lista") {
    itensTrabalho.push(item);
    res.redirect("/trabalho");
  } else {
    itens.push(item);
    res.redirect("/");
  }
});

app.get("/trabalho", function (req, res) {
  res.render("list", {
    diaSemanaEJS: "Lista do Trabalho",
    novosItensListaEJS: itensTrabalho,
  });
});

app.post("/trabalho", function (req, res) {
  let item = req.body.novoItem;
  itensTrabalho.push(item);
  res.redirect("/trabalho");
});

app.listen(3000, function () {
  console.log("Server started on port http://localhost:3000/");
});
