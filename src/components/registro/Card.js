import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";

const MainCard = styled.div`
  @media (min-width: 768px) {
    max-width: 490px;
    height: 360px;
    margin-left: 0px;
  }
  margin-left: 5px;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  margin-top: 15%;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

const Card = () => {
  return (
    <div className="columns is-centered">
      <MainCard className="column is-offset-7 mr-3">
        <Text />
      </MainCard>
    </div>
  );
};

export default Card;
