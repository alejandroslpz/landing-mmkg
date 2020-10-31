import React from "react";
import styled from "@emotion/styled";
import Nav from "./Nav";
import ImagenHome from "../../assets/img/home.jpg";
import { Parallax } from "react-scroll-parallax";
import Button from "./Button";

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenHome});
  background-size: cover;
`;

const Header = () => {
  return (
    <Parallax>
      <Home>
        <Nav />
        {/* <Button /> */}
      </Home>
    </Parallax>
  );
};

export default Header;
