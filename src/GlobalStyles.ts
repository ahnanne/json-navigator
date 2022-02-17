import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body {
  background-color: #282c34;
  color: #fafafa;
  margin: 0;
  padding: 0;
  font-family: 'Source Code Pro', "Noto Sans KR", sans-serif, 돋움, Dotum, 굴림, Gulim, "Apple SD Gothic Neo";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  min-width: 360px;
  overflow-x: hidden;
}

html, body, #root {
  height: 100%;
}

* {
  box-sizing: inherit;
}

input, button, textarea {
  font-family: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
}
`;

export default GlobalStyles;
