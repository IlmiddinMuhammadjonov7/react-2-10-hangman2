import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  & > img {
    width: 26px;
  }
`;

const HelathBar = styled.div`
  width: 57px;
  height: 16px;
  padding: 4px;
  background-color: white;
  border-radius: 96px;
`;

const HealthPoint = styled.div`
  border-radius: inherit;
  width: 70%;
  height: 100%;
  background: ${(props) => props.theme.colors.navy};
`;
// Ushbu joyda jon hisoblab boriladi
const Health = () => {
  return (
    <Container>
      <HelathBar>
        <HealthPoint />
      </HelathBar>
      <img src={"/images/icon-heart.svg"} alt="heart" />
    </Container>
  );
};

export default Health;
