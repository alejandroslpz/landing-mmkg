import React from "react";
import styled from "@emotion/styled";
import ImagenBas from "../../assets/img/bases.jpg";
import Card from "./Card";

const ImagenBases = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenBas});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bases = () => {
  return (
    <ImagenBases>
      <Card />
    </ImagenBases>
  );
};

export default Bases;
