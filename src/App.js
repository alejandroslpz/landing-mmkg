import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Registro from "./components/registro/Registro";
import Bases from "./components/bases/Bases";

const App = () => {
  return (
    <ParallaxProvider>
      <Header />
      <Registro />
      <Bases />
      <Footer />
    </ParallaxProvider>
  );
};

export default App;
