import React from "react";
import styled from "@emotion/styled";

const Navigation = styled.nav`
  z-index: 2;
  position: fixed;
  top: 5%;
  right: 22%;
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

const Nav = () => {
  return (
    <Navigation>
      <Enlace href="/html/">Home</Enlace>
      <Enlace href="/css/">Registro</Enlace>
      <Enlace href="/js/">Bases y Mécanica</Enlace>
      <Enlace href="/python/">Premio</Enlace>
    </Navigation>
  );
};

export default Nav;
