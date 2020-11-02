import React from "react";
import styled from "@emotion/styled";

const Texto = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  width: 35%;
  text-align: center;
  margin-top: 15px;
`;

const Text = () => {
  return (
    <Texto>
      ¿Caribe, Alaska, Europa o Hawaii? Elige el destino que más quieras y Club
      Premier se encarga del vuelo, el hospedaje y el crucero.
    </Texto>
  );
};

export default Text;
