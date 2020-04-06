import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Kavoon&family=Shrikhand&display=swap');
html, body {
  height: 100%;
  scroll-behavior: smooth; 
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  background-color: pink;
  min-height: 100%;  
}
h1 {
  font-family: shrikhand;
}
`;

export default GlobalStyle; 