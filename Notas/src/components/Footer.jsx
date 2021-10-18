import React from "react";

const data = new Date();
let ano = data.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {ano}</p>
    </footer>
  );
}

export default Footer;
