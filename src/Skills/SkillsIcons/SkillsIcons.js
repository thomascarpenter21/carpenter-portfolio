import React from 'react';
import styled from 'styled-components';
import { KeyframesBlue } from '../../Keyframes/Keyframes';
import { KeyframesPurple } from '../../Keyframes/Keyframes';
import { KeyframesWine } from '../../Keyframes/Keyframes';
import { KeyframesGreen } from '../../Keyframes/Keyframes';


const BarSection = styled.section`
  flex-direction: column;
  height: 100%;
  width: 100%;
  display: inline-block;
  margin-left: 10%; 
  justify-content: space-between;
`;

const StyledH2 = styled.h2`
height: 25px;
min-width: 800px;
margin: 0 auto 10px;
line-height: 25px;
font-size: 20px;
color: #fff;
padding:0 0 0 10px;
position: relative;
text-align: left;
`;

const BottomBar = styled.div`
   width: 80%;
   height: 40px;
   margin: 10px;
   background: #ffffff;
   `;

const CSS = styled.div`
   width: 60%;
   height: 40px;
   border: 1px solid rgba(0, 0, 0, .2);
   background: #00e3bd;
   animation: ${KeyframesBlue} 2s ease-in-out 0s forwards;
   
   
`;
const JAVASCRIPT = styled.div`
   width: 60%;
   height: 40px;
   border: 1px solid rgba(0, 0, 0, .2);
   background: #00e3bd;
   animation: ${KeyframesPurple} 2s ease-in-out 0s forwards;
`;
const HTML = styled.div`
   width: 60%;
   height: 40px;
   border: 1px solid rgba(0, 0, 0, .2);
   background: #00e3bd;
   animation: ${KeyframesWine} 2s ease-in-out 0s forwards;
`;
const Bootstrap = styled.div`
   width: 60%;
   height: 40px;
   border: 1px solid rgba(0, 0, 0, .2);
   background: #00e3bd;
   animation: ${KeyframesGreen} 2s ease-in-out 0s forwards;
`;

export const SkillsIcons = () => (
    <BarSection>
        <StyledH2>CSS</StyledH2>
        <BottomBar>
            <CSS />
        </BottomBar>
        <StyledH2>JAVASCRIPT</StyledH2>
        <BottomBar>
            <JAVASCRIPT />
        </BottomBar>
        <StyledH2>HTML</StyledH2>
        <BottomBar>
            <HTML />
        </BottomBar>
        <StyledH2>BOOTSTRAP</StyledH2>
        <BottomBar>
            <Bootstrap />
        </BottomBar>
    </BarSection>
);

 export default SkillsIcons;