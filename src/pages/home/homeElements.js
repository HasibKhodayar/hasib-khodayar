import styled, { keyframes } from 'styled-components';

export const homeContainer = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    text-align: left;
  
    margin-top: 100px;
    width: 100%;
    height: 100%;

`
const typingAnimation = keyframes`
  from {
    width: 0;
  }
`

const blinkAnimation = keyframes`
  50% {
    border-color: transparent;
  }
`

export const wrapper = styled.div`
    height: 100vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;
`

export const typewritter = styled.div`
  width: 14ch;
  color:  #DDC6B6;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 3em;
  animation: ${typingAnimation} 2s steps(13) forwards,
             ${blinkAnimation} 0.5s step-end infinite alternate forwards;
`

export const cardContainer = styled.div`
  width: 55rem;
`