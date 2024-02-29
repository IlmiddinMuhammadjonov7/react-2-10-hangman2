import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -6px 0px 7px rgba(157, 45, 245, 0.25) inset;

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  }
  & > img {
    width: 17px;
  }
`;

const IconButton = ({ icon, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={icon} alt="" />
    </StyledButton>
  );
};

export default IconButton;
