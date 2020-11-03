import React from "react";
import styled from "@emotion/styled";
import ImagenBas from "../../assets/img/bases.jpg";
import Card from "./Card";
import { Parallax } from "react-parallax";

const ParallaxContainer = styled(Parallax)`
  margin-top: -50px !important;
`;

const Bases = () => {
  return (
    <ParallaxContainer bgImage={ImagenBas} strength={400}>
      <div id="bases" className="section">
        <div className="container">
          <div style={{ height: "110vh" }}>
            <Card />
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default Bases;
