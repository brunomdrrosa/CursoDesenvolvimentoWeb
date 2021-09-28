const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var resultado = num1 + num2;

  res.send(`O resultado deu ${resultado}`);
});

app.get("/calculadoraimc", (req, res) => {
  res.sendFile(__dirname + "/calculadoraIMC.html");
});

app.post("/calculadoraimc", (req, res) => {
  var peso = Number(req.body.peso);
  var altura = Number(req.body.altura);

  var imc = peso / (altura * altura);

  if (imc < 18.5) {
    classificacao = "abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "com peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    classificacao = "com sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    classificacao = "com obesidade grau I";
  } else if (imc >= 35 && imc <= 39.9) {
    classificacao = "com obesidade grau II";
  } else if (imc >= 40) {
    classificacao = "com obesidade grau III";
  }

  res.send(`Você possui ${imc.toFixed(1)} de IMC, você está ${classificacao}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
