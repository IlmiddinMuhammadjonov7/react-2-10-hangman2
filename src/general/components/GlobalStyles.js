import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

ul{
    list-style: none;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Mouse Memoirs", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;

}

html,
body, 
#root{
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles