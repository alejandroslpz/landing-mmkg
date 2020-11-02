import React from "react";
import styled from "@emotion/styled";
import ImagenFooter2 from "../../assets/img/premio.jpg";
import CardsResponsive from "./CardsResponsive";
import Text from "./Text";

const ImageCover = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenFooter2});
  background-position: center bottom;
`;

const Footer = () => {
  return (
    <ImageCover id="premio" className="section">
      <div className="container">
        <Text />
        <CardsResponsive />
      </div>
    </ImageCover>
  );
};

export default Footer;
