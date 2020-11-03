import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/Nav";
import Footer from "./components/footer/Footer";
import Registro from "./components/registro/Registro";
import Bases from "./components/bases/Bases";
import Burger from "./components/Burger";
import NavResponsive from "./components/NavResponsive";

const App = () => {
  const [display, setDisplay] = useState("none");
  const [seccion, setSeccion] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 900) {
        setDisplay("flex");
      } else {
        setDisplay("none");
      }
    });
  }, [display]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 900) {
        setSeccion("Home");
      } else if (window.pageYOffset < 1800) {
        setSeccion("Registro");
      } else if (window.pageYOffset < 2700) {
        setSeccion("Bases");
      } else if (window.pageYOffset < 3600) {
        setSeccion("Premio");
      }
    });
  }, [seccion]);

  return (
    <>
      <Burger />
      <NavResponsive />
      <Nav display={display} seccion={seccion} />
      <Header />
      <Registro />
      <Bases />
      <Footer />
    </>
  );
};

export default App;
