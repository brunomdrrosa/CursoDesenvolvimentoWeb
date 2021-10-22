import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Nome do usuário" />
      <Input type="password" placeholder="Senha" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
