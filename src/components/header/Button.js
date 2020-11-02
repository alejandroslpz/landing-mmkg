import React from "react";
import styled from "@emotion/styled";

const BotonContainer = styled.div`
  padding-left: 135px;
`;

const Boton = styled.button`
  margin-top: 35px;
  text-transform: uppercase;
  background-color: #00bbf0;
  color: #fff;
  padding: 7px 10px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 10px;
  border-style: none;
  outline-style: none;

  &:hover {
    cursor: pointer;
  }
`;

const Button = () => {
  return (
    <BotonContainer>
      <Boton>Participar ahora</Boton>
    </BotonContainer>
  );
};

export default Button;
