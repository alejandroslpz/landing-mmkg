import styled from "@emotion/styled";
import React from "react";
import NubeImagen from "../../assets/img/nube.svg";

const Nube1Img = styled.div`
  position: absolute;
  top: 310px;
  left: 250px;
`;
const Nube2Img = styled.div`
  position: absolute;
  top: 100px;
  left: 850px;
`;
const Nube3Img = styled.div`
  position: absolute;
  top: 200px;
  right: 200px;
`;

const Nube1 = () => {
  return (
    <Nube1Img>
      <img src={NubeImagen} alt="Nube Imagen" />
    </Nube1Img>
  );
};

const Nube2 = () => {
  return (
    <Nube2Img>
      <img src={NubeImagen} alt="Nube Imagen" />
    </Nube2Img>
  );
};
const Nube3 = () => {
  return (
    <Nube3Img>
      <img src={NubeImagen} alt="Nube Imagen" />
    </Nube3Img>
  );
};

export { Nube1, Nube2, Nube3 };
