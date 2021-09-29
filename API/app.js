const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "69f04e4613056b159c2761a9d9e664d2";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
      res.write(
        `<h1>A temperatura em ${query}: ` +
          temp.toFixed(1) +
          " graus Celsius</h1>"
      );
      res.write(`<p>Temperatura minima: ${weatherData.main.temp_min}</p>`);
      res.write(`<p>Temperatura maxima: ${weatherData.main.temp_max}</p>`);
      res.write(`<img src="${icon}">`);
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
