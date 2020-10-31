import React from "react";
import styled from "@emotion/styled";
import ImagenReg from "../../assets/img/registro.png";

const ImagenRegistro = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenReg});
  background-size: cover;
`;

const Registro = () => {
  return <ImagenRegistro></ImagenRegistro>;
};

export default Registro;
