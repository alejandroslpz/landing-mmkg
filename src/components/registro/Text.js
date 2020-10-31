import React from "react";
import styled from "@emotion/styled";

const Titulo = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #00bbf0;
  text-transform: uppercase;
`;

const Texto = styled.p`
  font-size: 12px;
  color: #000;
`;

const TextContainer = styled.div`
  padding-top: 10%;
  margin: auto 0;
`;

const Text = () => {
  return (
    <TextContainer className="columns is-centered is-multiline">
      <div className="column is-10-desktop">
        <Titulo className="has-text-centered">
          ¡El registro se ha cerrado!
        </Titulo>
      </div>
      <div className="column is-12-desktop">
        <Texto className="has-text-centered">El registro se ha cerrado.</Texto>
        <Texto className="has-text-centered mt-3">
          Espera proximas noticias del Game Show.
        </Texto>
      </div>
    </TextContainer>
  );
};

export default Text;
