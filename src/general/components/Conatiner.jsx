import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-height: 100%;
  padding-left: 25px;
  padding-right: 26px;
  background: ${(props) =>
    props.$bgBlur
      ? `linear-gradient(180deg, rgba(26, 4, 58, 0.75) 0%, rgba(21, 18, 120, 0.75) 70.31%, rgba(43, 22, 119, 0.75) 100%), url("/images/background-mobile.svg") no-repeat center/cover`
      : `url("/images/background-mobile.svg") no-repeat center/cover`};
`;

const Conatiner = ({ children, bgBlur, className }) => {
  return <StyledContainer className={className} $bgBlur={bgBlur}>{children}</StyledContainer>;
};

export default Conatiner;
