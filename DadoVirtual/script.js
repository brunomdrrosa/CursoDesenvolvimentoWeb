// Dado do jogador 1
// Escolhe um número aleatório de 1 a 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

// Escolha uma imagem aleatória da pasta dos dados
var randomDiceImage1 = "images/dice"+ randomNumber1 +".png"; 

// Muda a 1° imagem do HTML para um dado aleatório
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1) 

// Dado do jogador 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice"+ randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)

// Mudar o título da página para o vencedor
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Jogador 1 ganhou";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Jogador 2 ganhou 🏆";
} else {
    document.querySelector("h1").innerHTML = "Deu empate 🥈";
}