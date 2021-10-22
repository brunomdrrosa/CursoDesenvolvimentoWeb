import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">Meus Contatos</h1>
      <Avatar imagem="https://avatars.githubusercontent.com/u/75590326?v=4"/>
      <Card
        nome={contacts[0].name}
        imagem={contacts[0].imgURL}
        telefone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        nome={contacts[1].name}
        imagem={contacts[1].imgURL}
        telefone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        nome={contacts[2].name}
        imagem={contacts[2].imgURL}
        telefone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
