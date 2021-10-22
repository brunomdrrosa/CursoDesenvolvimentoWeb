import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Nome de usuário" />
      <input type="password" placeholder="Senha" />
      {props.estaRegistrado === false && (
        <input type="password" placeholder="Confirmar senha" />
      )}
      <button type="submit">
        {props.estaRegistrado ? "Login" : "Registrar"}
      </button>
    </form>
  );
}

export default Form;
