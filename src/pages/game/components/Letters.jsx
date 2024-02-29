import React from "react";
import styled from "styled-components";

// Har bir foydalanilgan containerlar uchun style comp
const Container = styled.div`
  padding-top: 92px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 12px;
`;

// harflar uchun style comp
const Letter = styled.div`
  border-radius: 12px;
  background: ${(props) => props.theme.colors.blue};
  box-shadow: 0px -2px 0px 3px #140e66 inset, 0px 1px 0px 6px #3c74ff inset;
  color: ${props=>props.theme.colors.white};
  text-align: center;
  font-size: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 9px 13px;
`;

const Letters = () => {
  return (
    <Container>
      <Row>
        <Letter>A</Letter>
        <Letter>U</Letter>
        <Letter>S</Letter>
        <Letter>T</Letter>
        <Letter>R</Letter>
      </Row>
    </Container>
  );
};

export default Letters;
