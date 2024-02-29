import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledPlayBtn = styled.button`
  width: 160px;
  height: 160px;
  border-radius: 999px;
  border: none;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9d2df5 inset;
  margin-bottom: 57px;
  & > img {
    width: 52px;
  }
  cursor: pointer;
  &:hover,
  &:active {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
    & > img {
      width: 66px;
    }
  }
`;

const PlayBtn = ({onclick}) => {
  return (
    <StyledPlayBtn onClick={onclick}>
      <img src="/images/icon-play.svg" alt="" />
    </StyledPlayBtn>
  );
};

export default PlayBtn;
