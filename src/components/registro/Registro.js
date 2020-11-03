import React from "react";
import styled from "@emotion/styled";
import ImagenReg from "../../assets/img/registro.png";
import Card from "./Card";

const ImagenRegistro = styled.section`
  width: 100vw;
  height: 110vh;
  position: relative;
  margin-top: -40px !important;
  background-size: cover;
  background-image: url(${ImagenReg});

  @media (max-width: 768px) {
    background-position: center;
  }
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
