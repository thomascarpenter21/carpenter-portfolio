import React from 'react';
import styled from 'styled-components';
import SkillsIcons from './SkillsIcons/SkillsIcons';

 

const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%; 
  margin: 0 auto;
  text-align: center;
  overflow: auto;
`;

const StyledH1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;
  margin-top: 40px;
  padding-top: 6em;
`;

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

function getWidthString(span) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%;`
}

const Column = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media only screen and (min-width: 922px) {
    ${({ md }) => md && getWidthString(md)};
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

export const Skills = () => (
        <Wrapper>
          <Row>
            <Column xs="12" sm="6">
              <StyledH1>
              Services 
              </StyledH1>
            </Column>
            <Column xs="12" sm="6">
            <StyledH1>
                  Technologies
            </StyledH1> 
            <SkillsIcons />
            </Column>         
          </Row>          
        </Wrapper>    
)
