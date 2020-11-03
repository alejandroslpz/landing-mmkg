import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import d1 from "../../assets/img/d1.jpg";
import d2 from "../../assets/img/d2.jpg";
import d3 from "../../assets/img/d3.jpg";
import d4 from "../../assets/img/d4.jpg";

const Container = styled.div`
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

const MainCard = styled.div`
  @media (min-width: 768px) {
    max-width: 290px;
    margin: 0px 5px 50px 0px;
  }
  height: 430px;
  padding: 40px 20px 30px 20px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

const TextContainer = styled.div`
  padding-top: 10px;
`;

const Titulo = styled.h3`
  font-size: 25px;
  font-weight: 700;
`;

const Texto = styled.p`
  font-size: 13px;
`;

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const StyleSlider = styled(Slider)`
  @media (min-width: 768px) {
    margin: 0px 70px !important;
  }
`;

const CardsResponsive = () => {
  return (
    <Container>
      <StyleSlider {...settings}>
        <MainCard>
          <ImgContainer>
            <img src={d1} alt="Imagen Destino 1" />
          </ImgContainer>
          <TextContainer>
            <Titulo>Caribe</Titulo>
            <Texto>
              La región conocida como el Caribe comprende aproximadamente 26
              países y territorios diferentes que abarcan unas 7,000 islas
              distintas.
            </Texto>
          </TextContainer>
        </MainCard>
        <MainCard>
          <ImgContainer>
            <img src={d2} alt="Imagen Destino 2" />
          </ImgContainer>
          <TextContainer>
            <Titulo>Alaska</Titulo>
            <Texto>
              Aquí la temporada de cruceros es breve; los barcos solo pueden
              navegar entre mayo y septiembre. Disfruta de la historia, el
              legado multicultural, los fiordos, los glaciares y la vida
              silvestre.
            </Texto>
          </TextContainer>
        </MainCard>
        <MainCard>
          <ImgContainer>
            <img src={d3} alt="Imagen Destino 3" />
          </ImgContainer>
          <TextContainer>
            <Titulo>Europa</Titulo>
            <Texto>
              En cualquier momento del año encontrarás fantásticos paisajes
              partiendo de bacelona o de Ámsterdam, lugares llenos de historia y
              con una cultura encantadora.
            </Texto>
          </TextContainer>
        </MainCard>
        <MainCard>
          <ImgContainer>
            <img src={d4} alt="Imagen Destino 4" />
          </ImgContainer>
          <TextContainer>
            <Titulo>Hawaii</Titulo>
            <Texto>
              Todas las playas de Hawaii son gratuitas y están abiertas al
              público, incluso aquellas en las que se encuentran imponentes
              hoteles de lujo.
            </Texto>
          </TextContainer>
        </MainCard>
      </StyleSlider>
    </Container>
  );
};

export default CardsResponsive;
