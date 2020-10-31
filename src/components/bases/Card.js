import React from "react";
import styled from "@emotion/styled";
import TextBase from "./TextBase";

const MainCard = styled.div`
  max-width: 670px;
  min-height: 660px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 15%;
`;

const Card = () => {
  return (
    <div className="columns is-centered">
      <MainCard className="column">
        <TextBase />
      </MainCard>
    </div>
  );
};

export default Card;
