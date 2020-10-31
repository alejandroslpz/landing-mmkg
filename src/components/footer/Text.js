import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  max-width: 50%;
  margin-bottom: 70px;
`;

const Titulo = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

const Texto = styled.p`
  color: #fff;
`;

const Text = () => {
  return (
    <Container>
      <Titulo>Premio</Titulo>
      <Texto>
        Elige un destino, tu premio incluye: Vuelo redondo para dos personas
        saliendo desde Ciudad de México, hotel 4 estrellas en el destino una
        noche antes y una después del crucero, traslado
        aeropuerto-hotel-aeropuerto, crucero en una (1) cabina interior para dos
        personas por 7 días.*
      </Texto>
    </Container>
  );
};

export default Text;
