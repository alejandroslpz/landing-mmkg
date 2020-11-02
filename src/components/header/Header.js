import React from "react";
import styled from "@emotion/styled";
import ImagenHome from "../../assets/img/home.jpg";
import ImagenHomeMobile from "../../assets/img/home-mobile.jpg";
import Button from "./Button";
import Text from "./Text";
import Legend from "./Legend";
import Logo from "./Logo";
import { Nube1, Nube2, Nube3 } from "./Nube";
import NavHeader from "./NavHeader";

const Home = styled.section`
  width: 100vw;
  height: 100vh;
  @media (min-width: 768px) {
    background-image: url(${ImagenHome});
    background-size: cover;
  }
  background-image: url(${ImagenHomeMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 7%;
`;

const Container = styled.div`
  display: table;
  text-align: center;
`;

const HomeContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Header = () => {
  return (
    <Home id="home" className="section">
      <NavHeader />
      <Container>
        <HomeContainer>
          <div className="columns">
            <div className="column">
              <Logo />
              <Text />
              <Button />
              <Legend />
            </div>
          </div>
          <Nube1 />
          <Nube2 />
          <Nube3 />
        </HomeContainer>
      </Container>
    </Home>
  );
};

export default Header;
