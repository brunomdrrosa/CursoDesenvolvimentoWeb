import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const numerosMap = numbers.map((x) => x * x);
console.log(numerosMap);

//////Filter - Create a new array by keeping the items that return true.
const numerosFilter = numbers.filter((num) => num < 10);
console.log(numerosFilter);

//Reduce - Accumulate a value by doing something to each item in an array.
var numerosReduce = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(numerosReduce);

////Find - find the first item that matches from an array.
const numerosFind = numbers.find((num) => num > 10);
console.log(numerosFind);

////FindIndex - find the index of the first item that matches.
const numerosFindIndex = numbers.findIndex((num) => num > 10);
console.log(numerosFindIndex);
