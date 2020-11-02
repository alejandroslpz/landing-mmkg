import React from "react";
import styled from "@emotion/styled";

const LeyendaContainer = styled.div`
  margin-top: 20px;
  padding-left: 65px;
`;

const Leyenda = styled.p`
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;
`;

const Legend = () => {
  return (
    <LeyendaContainer>
      <Leyenda>Permiso segob dgrtc/1916/2019</Leyenda>
    </LeyendaContainer>
  );
};

export default Legend;
