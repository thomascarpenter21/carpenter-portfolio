import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: topte;
  overflow-y: scroll;
  background-color: pink ;
  padding: 100px 3% 100px;
`;

const StyledH1 = styled.h1`
  text-align: center;
  height: 100px;
  color: teal;
  ${({theme}) => theme.fonts.mq}
`;

export const Home = () => (  
  <Wrapper>
      <StyledH1>
          I CAN'T WAIT TO BUILD YOUR DREAM       
      </StyledH1>    
  </Wrapper>    
)

