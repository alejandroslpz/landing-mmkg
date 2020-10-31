import React from "react";
import styled from "@emotion/styled";
import ImagenBas from "../../assets/img/bases.jpg";
import Card from "./Card";

const ImagenBases = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenBas});
  background-size: cover;
`;

const Bases = () => {
  return (
    <ImagenBases>
      <div className="container">
        <Card />
      </div>
    </ImagenBases>
  );
};

export default Bases;
