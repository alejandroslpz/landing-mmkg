import React from "react";
import styled from "@emotion/styled";
import TextBase from "./TextBase";

const MainCard = styled.div`
  width: 670px;
  height: 660px;
  background-color: #fff;
  border-radius: 10px;
`;

const Card = () => {
  return (
    <MainCard>
      <TextBase />
    </MainCard>
  );
};

export default Card;
