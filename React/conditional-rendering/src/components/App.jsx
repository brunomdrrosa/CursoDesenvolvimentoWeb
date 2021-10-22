import React from "react";
import { render } from "react-dom";
import Login from "./Login";

var isLoggedIn = false;

const horaAtual = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        isLoggedIn ? <h1>Olá</h1> : <Login />
        // horaAtual > 18 && <h1>Por que você ainda está trabalhando?</h1>
      }
    </div>
  );
}

export default App;
