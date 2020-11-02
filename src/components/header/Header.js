import React from "react";
import styled from "@emotion/styled";
import ImagenHome from "../../assets/img/home.jpg";
import Button from "./Button";
import Text from "./Text";
import Legend from "./Legend";
import Logo from "./Logo";
import { Nube1, Nube2, Nube3 } from "./Nube";
import NavHeader from "./NavHeader";

const Home = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImagenHome});
  background-size: cover;
  padding-top: 7%;
`;

const Header = () => {
  return (
    <Home id="home" className="section">
      <NavHeader />
      <div className="container">
        <div className="columns">
          <div className="column is-offset-2">
            <Logo />
            <Text />
            <Button />
            <Legend />
          </div>
        </div>
        <Nube1 />
        <Nube2 />
        <Nube3 />
      </div>
    </Home>
  );
};

export default Header;
