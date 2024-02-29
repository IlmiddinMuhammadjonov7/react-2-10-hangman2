import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  text-align: center;

  /* Heading XL */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #243041;
  font-size: 48px;
  letter-spacing: -0.68px;
  background: linear-gradient(180deg, #67b6ff 16.42%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
