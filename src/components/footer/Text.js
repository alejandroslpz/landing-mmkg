import React from "react";
import styled from "@emotion/styled";

const Titulo = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

const Texto = styled.p`
  font-size: 12px;
  color: #fff;
`;

const Text = () => {
  return (
    <div className="columns is-centered is-multiline">
      <div className="column is-10-desktop">
        <Titulo className="has-text-centered">Premio</Titulo>
      </div>
      <div className="column is-5-desktop">
        <Texto className="has-text-centered">
          Elige un destino, tu premio incluye: Vuelo redondo para dos personas
          saliendo desde Ciudad de México, hotel 4 estrellas en el destino una
          noche antes y una después del crucero, traslado
          aeropuerto-hotel-aeropuerto, crucero en una (1) cabina interior para
          dos personas por 7 días.*
        </Texto>
      </div>
    </div>
  );
};

export default Text;
