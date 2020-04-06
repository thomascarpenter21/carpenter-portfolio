import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  text-align: center;
  background-color: pink;
`;

const StyledH1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: teal;
  padding-top: 5em;
`;


export const Contact = () => (
  <Wrapper>
      <StyledH1> 
         I do shit...look. 
      </StyledH1> 
 </Wrapper>
)
