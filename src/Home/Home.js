import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: top;
  overflow-y: scroll;
  padding: 200px 3% 100px;
`;

const StyledH1 = styled.h1`
  text-align: center;
  height: 100px;
  color: black;
  ${({theme}) => theme.fonts.mq}
`;

export const Home = () => (  
  <Wrapper>
      <StyledH1>
        Let's make your idea a reality. 
      </StyledH1>   
  </Wrapper>    
)

