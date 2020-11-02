import React from "react";
import styled from "@emotion/styled";
import ImagenBas from "../../assets/img/bases.jpg";
import Card from "./Card";

const ImagenBases = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenBas});
  background-position: center;
`;

const Bases = () => {
  return (
    <ImagenBases id="bases" className="section">
      <div className="container">
        <Card />
      </div>
    </ImagenBases>
  );
};

export default Bases;
