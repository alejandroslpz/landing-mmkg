import React from "react";
import LogoImagen from "../../assets/img/logo-CP.png";
import styled from "@emotion/styled";

const LogoImg = styled.div`
  padding-left: 30px;
`;

const Logo = () => {
  return (
    <LogoImg>
      <img src={LogoImagen} alt="LogoCrucero" />
    </LogoImg>
  );
};

export default Logo;
