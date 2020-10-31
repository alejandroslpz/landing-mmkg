import React from "react";
import styled from "@emotion/styled";
import ImagenFooter from "../../assets/img/premio.png";
import Cards from "./Cards";
import Text from "./Text";

const ImageCover = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenFooter});
  background-size: cover;
`;

const Footer = () => {
  return (
    <ImageCover>
      <div className="container">
        <Text />
        <Cards />
      </div>
    </ImageCover>
  );
};

export default Footer;
