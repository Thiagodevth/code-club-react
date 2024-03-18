import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
background: #0A0A10;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 2px;
height: 100%;
min-height: 100vh;
`;

export const Image = styled.img`
margin-top: 5px;

width: 342px;
height: 354px;

`;

export const ContainerItens = styled.div`
padding: 8px 16px 90px;
display: flex;
flex-direction: column;
`;

export const User = styled.li`
display: flex;
justify-content: space-between;
align-items: center;

background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 101px;
border: none;
border-radius: 14px;
outline: none;
padding: 2px 12px 2px 4px;
margin-top: 16px;

p {
    letter-spacing: -0.408px;
font-style: normal;
font-weight: 300;
padding-left: 25px;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
}

button {
background: none;
border: none;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}
}
`;

export const DivUser = styled.div`
gap: 10px;
display: flex;
flex-direction: column;

`;