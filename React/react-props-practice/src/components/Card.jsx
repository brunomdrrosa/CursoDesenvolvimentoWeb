import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.nome}</h2>
        <Avatar imagem={props.imagem}/>
      </div>
      <div className="bottom">
        <Detail detailinfo={props.telefone} />
        <Detail detailinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
