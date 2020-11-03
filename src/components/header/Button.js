import React from "react";
import styled from "@emotion/styled";

const Boton = styled.button`
  margin-top: 15px;
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
    <div className="columns animate__animated animate__zoomIn">
      <div className="column">
        <Boton>Participar ahora</Boton>
      </div>
    </div>
  );
};

export default Button;
