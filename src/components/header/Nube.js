import styled from "@emotion/styled";
import React from "react";
import NubeImagen from "../../assets/img/nube.svg";

const Nube1Img = styled.div`
  @media (min-width: 1199px) {
    top: 310px;
    left: 250px;
  }
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    left: 150px;
  }
  display: none;

  animation-duration: 3s;
`;
const Nube2Img = styled.div`
  @media (min-width: 1199px) {
    top: 100px;
    left: 850px;
  }
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
  }
  display: none;
  animation-duration: 2s;
`;
const Nube3Img = styled.div`
  @media (min-width: 1199px) {
    top: 200px;
    right: 200px;
  }
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    right: 100px;
  }
  display: none;
  animation-duration: 3s;
`;

const Nube1 = () => {
  return (
    <Nube1Img className="animate__animated animate__fadeInLeft">
      <img src={NubeImagen} alt="Nube Imagen" />
    </Nube1Img>
  );
};

const Nube2 = () => {
  return (
    <Nube2Img className="animate__animated animate__fadeInLeft">
      <img src={NubeImagen} alt="Nube Imagen" />
    </Nube2Img>
  );
};
const Nube3 = () => {
  return (
    <Nube3Img className="animate__animated animate__fadeInRight">
      <img src={NubeImagen} alt="Nube Imagen" />
    </Nube3Img>
  );
};

export { Nube1, Nube2, Nube3 };
