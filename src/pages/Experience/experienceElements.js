import styled from "styled-components";

export const aboutSection = styled.div`
    padding-top: 70px;
    display: flex;
    align-items: center;
    text-align: left;
`


export const titles = styled.h1`
 &{
    font-family: monospace;
    color: #000000;
    text-align: left;
    margin-left: 0px; 
    margin-right:55%;
    font-weight: bolder;
    font-size: 30px;
    color: #DDC6B6;
    padding-bottom: 40px;
    margin: 0 10px;
 }
 &:after{
        content: "";
        display: block;
        width: 260px;
        margin-top: -15px;
        height: 1px;
        margin-left: 220px;
        background-color: #DDC6B6 
    }
   
`

export const textContainer = styled.div`
    flex: 1;
    padding: 2px;
    margin-left: 5%;
    font-size: 18px;
  
    color: #DDC6B6 ;
    font-family: monospace;

`

export const imgContainer = styled.img`
    flex: 1;
    padding: 2px;
    margin-right: 5%;
    width: 50%;
`