import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  padding: 5em;
`;

export const About = () => (
        <Wrapper>
            <StyledH1> 
                I'm thomas and I'm currently living in Venice, California. Passions are hanging with my family, gym, and outdoor activites. 
                Professionally I'm deeply passate about building websites, applications and platforms. 
            </StyledH1> 
       </Wrapper>
    )
