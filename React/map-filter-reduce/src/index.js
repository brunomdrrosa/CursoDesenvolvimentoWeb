import emojipedia from "./emojipedia";

var numeros = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function dobrar(x) {
  return x * 2;
}

const novosNumeros = numeros.map(dobrar);
console.log(novosNumeros);

//Filter - Create a new array by keeping the items that return true.
const numerosFiltrados = numeros.filter(function (num) {
  return num > 10;
});

console.log(numerosFiltrados);

//Reduce - Accumulate a value by doing something to each item in an array.
const numerosReduce = numeros.reduce(function (accumulator, numeroAtual) {
  return accumulator + numeroAtual;
});

console.log(numerosReduce);

//Find - find the first item that matches from an array.
const numerosFind = numeros.find(function (num) {
  return num > 10;
});

console.log(numerosFind);

//FindIndex - find the index of the first item that matches.
const numerosFindIndex = numeros.findIndex(function (num) {
  return num > 10;
});

console.log(numerosFindIndex);

// Desafio de imprimir o texto do significado de um emoji limitado a 100 caracteres

const limitarString = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(limitarString);
