import React from "react";
import styled from "@emotion/styled";

const Nav = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  width: 100vw;
  height: 350px;
  top: 0;
  background-color: #03213f;
  position: fixed;
  z-index: 500;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: ${({ open }) =>
    open ? "transform 0.3s ease-in-out" : "transform 0.1s ease-in-out"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 15% 15%;
`;

const Enlace = styled.a`
  margin: 15px;
  color: #fff;

  &:hover {
    color: #00bbf0;
  }
`;

const NavResponsive = ({ open, setOpen }) => {
  // Funcion para cerrar burger
  const closeBurger = () => {
    setOpen(!open);
  };

  return (
    <Nav className="navbar-end" open={open}>
      <Enlace href="#home" onClick={() => closeBurger()}>
        Home
      </Enlace>
      <Enlace href="#registro" onClick={() => closeBurger()}>
        Registro
      </Enlace>
      <Enlace href="#bases" onClick={() => closeBurger()}>
        Bases y Mécanica
      </Enlace>
      <Enlace href="#premio" onClick={() => closeBurger()}>
        Premio
      </Enlace>
    </Nav>
  );
};

export default NavResponsive;
