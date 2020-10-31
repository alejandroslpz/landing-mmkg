import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const Titulo = styled.h2`
  color: #00bbf0;
  font-size: 28px;
  font-weight: 700;
`;

const SubTitulo = styled.h3`
  margin: 15px 0px;
  font-weight: 700;
  font-size: 20px;
`;

const Texto = styled.p`
  margin: 15px 0px;
  font-size: 13px;
`;

const TextBase = () => {
  return (
    <Container>
      <Titulo>Bases y Mecánica</Titulo>
      <SubTitulo>Bases</SubTitulo>
      <Texto>
        1. Podrán participar hombres y mujeres de nacionalidad mexicana y/o
        extranjeros que sean residentes en la República Mexicana, mayores de 21
        años de edad (deberán contar con identificación oficial vigente con
        fotografia), que habiten en la República Mexicana, que sean Socios Club
        Premier (contar con su número de Socio Club Premier) y que quieran
        viajar con un acompañante a alguno de los siguientes destinos para
        disfrutar de un crucero: Caribe, Estados Unidos de América; Alaska,
        Estados Unidos de América; Europa (Ámsterdam, Países Bajos o Barcelona,
        España) y Hawái, Estados Unidos de América.
      </Texto>
      <Texto>
        Se deberá hacer del conocimiento de las personas participantes que con
        el objeto de participar, deberán ser socios activos de Club Premier, lo
        anterior para proteger el principio de buena fé de las personas
        participantes y del público.
      </Texto>
      <Texto>
        2. Cualquier pesona que aún no sea Socio Club Premier, lo podrá ser
        registrándose en la página de Internet{" "}
        <a href="www.clubpremier.com">www.clubpremier.com</a> o en el micrositio
        del concurso de las páginas de Internet{" "}
        <a href="www.wradio.com.mx">www.wradio.com.mx</a> o{" "}
        <a href="https://www.marthadebayle.com">
          https://www.marthadebayle.com
        </a>
      </Texto>
      <Texto>
        3. Las personas que sean Socios Club Premier deberán actualizar sus
        datos (nombre, apellido, correo electrónico, número telefónico,
        etcétera) en la página de Internet{" "}
        <a href="www.clubpremier.com">www.clubpremier.com</a>
      </Texto>
      <Texto>
        4. Los gastos de transportación y hospedaje de los participantes que
        acudirán a la cabina del programa de radio "Martha Debayle en W",
        corrarán por cuenta y cargo de las personas participantes.
      </Texto>
    </Container>
  );
};

export default TextBase;
