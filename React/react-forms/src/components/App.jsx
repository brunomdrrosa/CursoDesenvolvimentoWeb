import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Olá {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Qual o seu nome?"
          value={name}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
