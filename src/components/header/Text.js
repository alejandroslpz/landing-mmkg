import React from "react";
import styled from "@emotion/styled";

const Texto = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  font-style: italic;
`;

const Text = () => {
  return (
    <div className="columns is-centered animate__animated animate__zoomIn">
      <div className="column is-5">
        <Texto>
          ¿Caribe, Alaska, Europa o Hawaii? Elige el destino que más quieras y
          Club Premier se encarga del vuelo, el hospedaje y el crucero.
        </Texto>
      </div>
    </div>
  );
};

export default Text;
