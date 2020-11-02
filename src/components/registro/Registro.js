import React from "react";
import styled from "@emotion/styled";
import ImagenReg from "../../assets/img/registro.png";
import Card from "./Card";

const ImagenRegistro = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenReg});
  background-size: cover;
`;

const Registro = () => {
  return (
    <ImagenRegistro id="registro" className="section">
      <div className="container">
        <Card />
      </div>
    </ImagenRegistro>
  );
};

export default Registro;
