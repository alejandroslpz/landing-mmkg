import React from "react";
import styled from "@emotion/styled";

const Navigation = styled.nav`
  display: ${({ display }) =>
    display === "flex" ? "flex" : "none"}; // Validación de posición de página
  position: fixed;
  width: 100vw;
  background-color: #03213f; // Se tomo del mar del primer diseño
`;

const Enlace = styled.a`
  margin-right: 15px;
  text-transform: uppercase;
  font-size: 13px;

  &:hover {
    color: #00bbf0;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 17%;
`;

const Nav = ({ display, seccion }) => {
  return (
    <Navigation className="navbar" display={display}>
      <div className="navbar-menu">
        <Menu className="navbar-end">
          <Enlace
            style={{ color: `${seccion === "Home" ? "#00bbf0" : "#fff"}` }}
            href="#home"
          >
            Home
          </Enlace>
          <Enlace
            style={{ color: `${seccion === "Registro" ? "#00bbf0" : "#fff"}` }}
            href="#registro"
          >
            Registro
          </Enlace>
          <Enlace
            style={{ color: `${seccion === "Bases" ? "#00bbf0" : "#fff"}` }}
            href="#bases"
          >
            Bases y Mécanica
          </Enlace>
          <Enlace
            style={{ color: `${seccion === "Premio" ? "#00bbf0" : "#fff"}` }}
            href="#premio"
          >
            Premio
          </Enlace>
        </Menu>
      </div>
    </Navigation>
  );
};

export default Nav;
