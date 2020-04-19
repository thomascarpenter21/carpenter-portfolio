import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1 0 auto;
    padding: 10px;
`;

const Footerstyle = styled.div`
  flex-shrink: 0;
  text-align: center;
  background-color: tomato;
  color: white;
`;

export const Footer  = () => (
    <Wrapper>
        <Footerstyle>
          <h1>Hi guys!</h1>
        </Footerstyle>
    </Wrapper>
    
);