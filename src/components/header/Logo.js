import React from "react";
import LogoImagen from "../../assets/img/logo-CP.png";

const Logo = () => {
  return (
    <div className="columns">
      <div className="column">
        <img src={LogoImagen} alt="LogoCrucero" />
      </div>
    </div>
  );
};

export default Logo;
