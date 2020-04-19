import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  text-align: center;
`;

const StyledH1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  padding-top: 5em;
`;

export const Projects = () => (
   
        <Wrapper>
            <StyledH1>
                Made a little red car out of cherrios
            </StyledH1> 
        </Wrapper>
     
     
)