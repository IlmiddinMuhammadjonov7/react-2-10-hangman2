import styled, { css } from "styled-components";

// variant = "circular" | "rectangular"

// Bu joyda yangi button ni kodlar yani styled component orqali
const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  font-size: 32px;
  transition: all 300ms;
  /* Hover va activ holatlari berilyapti */
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      #2463ff;
  }
  /* Props orqali kelgan elementni tekshrib shartga to'g'risini tanlab olib berish */
  ${(props) => {
    switch (props.$variant) {
      case "circular":
        return css`
          background-color: ${(props) => props.theme.colors.blue};
          padding: 12px 64px;
          border-radius: 40px;
          box-shadow: 0px -2px 0px 3px #140e66 inset,
            0px 1px 0px 6px #3c74ff inset;
        `;
      case "rectangular":
        return css`
          background-color: ${(props) => props.theme.colors.blue};
          box-shadow: 0px -2px 0px 3px #140e66 inset,
            0px 1px 0px 6px #3c74ff inset;
          padding: 24px 0;
          width: 100%;
          font-size: 24px;
          text-align: center;
          border-radius: 20px;
        `;
    }
  }}

  ${(props) =>
    props.$danger &&
    css`
      background: var(
        --Pink-Gradient,
        linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%)
      );
      box-shadow: 0px -2px 0px 3px #140e66 inset, 0px 1px 0px 6px #c642fb inset;
      &:hover {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.25) 100%
          ),
          linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
        
      }
    `}
`;

// Elementlar props orqali qabul qilinyapti
const Button = ({ children, onClick, variant, danger }) => {
  return (
    <StyledButton $danger={danger} $variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
