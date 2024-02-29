import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 118px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28px, 1fr));
  column-gap: 8px;
  row-gap: 24px;
`;

const Key = styled.button`
  color: ${(props) => props.theme.colors.navy};
  text-align: center;
  font-size: 24px;
  border-radius: 8px;
  background: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  padding-block: 10px;
`;
// har bir harfni maplab uni joyiga joylashtirib chiqdim

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = () => {
  return (
    <Container>
      {alphabet.map((item) => (
        <Key key={item}>{item}</Key>
      ))}
    </Container>
  );
};

export default Keyboard;
