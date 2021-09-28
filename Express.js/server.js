const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contato", (req, res) => {
  res.send("Entre em contato em: brunomdr46@gmail.com");
});

app.get("/sobre", (req, res) => {
  res.send("Me chamo Bruno Machado, tenho 19 anos e sou um desenvolvedor Full-Stack");
});

app.get("/hobbies", (req, res) => {
    res.send("Gosto de jogar video-game e fazer atividade física");
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
