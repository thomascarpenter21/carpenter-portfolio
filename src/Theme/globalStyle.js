import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
html, body {
  height: 100%;
  width: 100%; 
  padding: 0;
  margin: 0;
  color: black;
  overflow: auto;
  /* font-family: Roboto, sans-serif; */
  background-color: #e9ecee;
  min-height: 100%;  
}
h1, p {
  font-family: 'Lato', sans-serif;;
}
`;

export default GlobalStyle; 