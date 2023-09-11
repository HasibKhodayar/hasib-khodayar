import styled from "styled-components";

export const projectsSection = styled.div`
    padding-top: 180px;
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
        width: 300px;
        margin-top: -15px;
        height: 1px;
        margin-left: 180px;
        background-color: #DDC6B6 
    }
`

export const textContainer = styled.div`
    flex: 1;
    padding: 5px;
    margin-right: 12%;
    font-size: 25px;
    margin-left: 4%;
    color: #DDC6B6 ;
    font-family: monospace;

`

export const imgContainer = styled.div`
    flex: 1;
    padding: 10px;
    margin-left: 15%;
    font-size: medium;
    font-family: monospace;
`

