import React from "react";
import styled from "styled-components";
import IconButton from "../../../general/components/IconButton";
import Health from "./Health";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const CategoryTitle = styled.span`
  color: ${props=>props.theme.colors.white};
  font-size: 40px;
  letter-spacing: -0.2px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Left>
        <IconButton icon={"/images/icon-menu.svg"} />
        <CategoryTitle>Countries</CategoryTitle>
      </Left>
      <Health/>
    </StyledHeader>
  );
};

export default Header;
