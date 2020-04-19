import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  text-align: center;
  font-size: 1.2em;
  padding: 2.0em;
`;

const GreenGlow = styled.div`
  color: #00e3bd; 
`;

export const Contact = () => (
  <Wrapper>
    <p>
      Your project needs to gets started.
    </p>
    <p>
      Contact me. 
    </p>
    <GreenGlow>
      @thomascarpenter 
    </GreenGlow>    
 </Wrapper>
)
