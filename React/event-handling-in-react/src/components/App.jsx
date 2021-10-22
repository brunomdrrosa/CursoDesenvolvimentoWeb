import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Olá");
  const [mouseEmcimaBotao, setMouseBotao] = useState(false);

  function botaoCliclado() {
    setHeadingText("Enviado");
  }

  function mouseEmcima() {
    setMouseBotao(true);
  }

  function mouseFora() {
    setMouseBotao(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="Qual o seu nome?" />
      <button
        style={{ backgroundColor: mouseEmcimaBotao ? "black" : "white" }}
        onClick={botaoCliclado}
        onMouseOver={mouseEmcima}
        onMouseOut={mouseFora}
      >
        Enviar
      </button>
    </div>
  );
}

export default App;
