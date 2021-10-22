import React, { useState } from "react";

function App() {
  setInterval(atualizarHora, 1000);

  let agora = new Date().toLocaleTimeString();

  const [hora, setHora] = useState(agora);

  function atualizarHora() {
    let horaAtualizada = new Date().toLocaleTimeString();
    setHora(horaAtualizada);
  }

  return (
    <div className="container">
      <h1>{hora}</h1>
      <button onClick={atualizarHora}>Mostrar hora</button>
    </div>
  );
}

export default App;
