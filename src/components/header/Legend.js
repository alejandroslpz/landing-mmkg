import React from "react";
import styled from "@emotion/styled";

const LeyendaContainer = styled.div`
  margin-top: 10px;
`;

const Leyenda = styled.p`
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;
`;

const Legend = () => {
  return (
    <div className="columns">
      <LeyendaContainer className="column">
        <Leyenda>Permiso segob dgrtc/1916/2019</Leyenda>
      </LeyendaContainer>
    </div>
  );
};

export default Legend;
