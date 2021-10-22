import React, { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  return (
    <div className="container">
      <h1>{contador}</h1>
      <button onClick={diminuir}>-</button>
      <button onClick={aumentar}>+</button>
    </div>
  );
}

export default App;
