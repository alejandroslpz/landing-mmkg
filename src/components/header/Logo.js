import React from "react";
import LogoImagen from "../../assets/img/logo-CP.png";
import styled from "@emotion/styled";

const LogoDiv = styled.div`
  animation-delay: 2s;
`;

const Logo = () => {
  return (
    <LogoDiv className="columns animate__animated animate__tada">
      <div className="column">
        <img src={LogoImagen} alt="LogoCrucero" />
      </div>
    </LogoDiv>
  );
};

export default Logo;
