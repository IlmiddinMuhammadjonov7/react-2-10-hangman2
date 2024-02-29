import React from "react";
import styled from "styled-components";
import PlayBtn from "./components/PlayBtn";
import Button from "../../general/components/Button";
import Conatiner from "../../general/components/Conatiner";
import { useNavigate } from "react-router-dom";



const Menu = styled.div`
  border-radius: 48px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463ff inset, 0px -8px 0px 4px #140e66 inset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 481px;
  position: relative;
  padding-top: 138px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 592px;
    margin: 0 auto;
  }
`;

// Bu alohida bir container sifatida kelyapti
const Img = styled.img`
  position: absolute;
  top: -50px;
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 355px;
    top: -80px;
  }
`;

const StyledContainer = styled(Conatiner)`
  padding-top: 206px; 
`

const Home = () => {
  const navigate = useNavigate()
  return (
    // Betta o'sha containerlar ishlatilyapti yani nomi bilan
    <StyledContainer>
      {/* Bu qamrovchi container */}
      <Menu>
        <Img src="/images/logo.svg" alt="" />
        {/* Bu bizda yangi yaratilgan button */}
        <PlayBtn onclick={()=>navigate("/category")}/>
        <Button onClick={()=>navigate("/how-to")} variant={"circular"}>how to play</Button>
      </Menu>
    </StyledContainer>
  );
};

export default Home;
