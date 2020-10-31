import React from "react";
import styled from "@emotion/styled";
import d1 from "../../assets/img/d1.jpg";
import d2 from "../../assets/img/d2.jpg";
import d3 from "../../assets/img/d3.jpg";
import d4 from "../../assets/img/d4.jpg";

const Container = styled.div`
  margin-top: 50px;
`;

const MainCard = styled.div`
  @media (min-width: 768px) {
    max-width: 290px;
    min-height: 430px;
    margin: 0px 5px;
  }
  margin: 10px 0px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 60px 20px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
`;

const Titulo = styled.h3`
  font-size: 25px;
  font-weight: 700;
`;

const Texto = styled.p`
  font-size: 13px;
`;

const Cards = () => {
  return (
    <Container className="columns is-centered is-desktop">
      <MainCard className="column">
        <img src={d1} alt="Imagen Destino 1" />
        <div>
          <Titulo>Caribe</Titulo>
          <Texto>
            La región conocida como el Caribe comprende aproximadamente 26
            países y territorios diferentes que abarcan unas 7,000 islas
            distintas.
          </Texto>
        </div>
      </MainCard>
      <MainCard className="column">
        <img src={d2} alt="Imagen Destino 2" />
        <div>
          <Titulo>Alaska</Titulo>
          <Texto>
            Aquí la temporada de cruceros es breve; los barcos solo pueden
            navegar entre mayo y septiembre. Disfruta de la historia, el legado
            multicultural, los fiordos, los glaciares y la vida silvestre.
          </Texto>
        </div>
      </MainCard>
      <MainCard className="column">
        <img src={d3} alt="Imagen Destino 3" />
        <div>
          <Titulo>Europa</Titulo>
          <Texto>
            En cualquier momento del año encontrarás fantásticos paisajes
            partiendo de bacelona o de Ámsterdam, lugares llenos de historia y
            con una cultura encantadora.
          </Texto>
        </div>
      </MainCard>
      <MainCard className="column">
        <img src={d4} alt="Imagen Destino 4" />
        <div>
          <Titulo>Hawaii</Titulo>
          <Texto>
            Todas las playas de Hawaii son gratuitas y están abiertas al
            público, incluso aquellas en las que se encuentran imponentes
            hoteles de lujo.
          </Texto>
        </div>
      </MainCard>
    </Container>
  );
};

export default Cards;
