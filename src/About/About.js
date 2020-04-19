import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  text-align: center;
  font-size: 1.5em;
  padding: 3.0em;
`;

// const StyledH1 = styled.h1`
//   font-size: 2.5em;ew
//   text-align: center;
//   color: teal;
//   padding: 5em;
// `;

export const About = () => (
        <Wrapper>
           <p>
           Hi, I'm Thomas, Web Developer.
           Professionally I'm connected to the web development industry for many years. Im exicted about developing websites, applications and platforms. 
           Passionate about spending time with my family, goint to the gym, and outdoor activites. 
           </p>
       </Wrapper>
    )
