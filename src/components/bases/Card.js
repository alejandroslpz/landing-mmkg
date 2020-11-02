import React from "react";
import styled from "@emotion/styled";
import TextBase from "./TextBase";

const MainCard = styled.div`
  max-width: 670px;
  min-height: 660px;
  background-color: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

const Card = () => {
  return (
    <div className="columns is-centered">
      <MainCard className="column mr-3">
        <TextBase />
      </MainCard>
    </div>
  );
};

export default Card;
