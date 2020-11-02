import React from "react";
import styled from "@emotion/styled";

const Navigation = styled.nav`
  z-index: 2;
  position: absolute;
  top: 5%;
  right: 17%;
`;

const Enlace = styled.a`
  color: white;
  margin-right: 15px;
  text-transform: uppercase;
  font-size: 13px;
  &:hover {
    color: #00bbf0;
  }
`;

const NavHeader = () => {
  return (
    <Navigation>
      <Enlace href="#home">Home</Enlace>
      <Enlace style={{ color: "#00bbf0" }} href="#registro">
        Registro
      </Enlace>
      <Enlace href="#bases">Bases y Mécanica</Enlace>
      <Enlace href="#premio">Premio</Enlace>
    </Navigation>
  );
};

export default NavHeader;
