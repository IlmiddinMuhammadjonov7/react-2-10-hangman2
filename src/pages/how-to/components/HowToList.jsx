import React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding-top: 79px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ListItem = styled.li`
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 32px;
`;

const Heading = styled.h3`
  color: ${(props) => props.theme.colors.navy};
  font-size: 24px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  & > span {
    color: ${(props) => props.theme.colors.blue};
  }
`;

const Paragraph = styled.p`
  color: #887dc0;
  font-size: 16px;
  letter-spacing: 0.8px;
`;
const HowToList = () => {
  const items = [
    {
      id: 1,
      title: "Choose a category",
      body: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      id: 2,
      title: "Guess letters",
      body: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      id: 3,
      title: "Win or lose",
      body: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <Heading>
            <span>0{item.id}</span>
            {item.title}
          </Heading>
          <Paragraph>{item.body}</Paragraph>
        </ListItem>
      ))}
    </List>
  );
};

export default HowToList;
