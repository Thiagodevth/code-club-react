import styled from "styled-components";
import { Link} from "react-router-dom";

export const Container = styled.div`
background: #0A0A10;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 2px;

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

export const InputLabel = styled.p`
letter-spacing: -0.408px;
font-style: normal;
font-weight: 700;
padding-left: 25px;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;

`;

export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 58px;
border: none;
outline: none;
padding-left: 24px;
font-style: normal;
font-weight: 300;
font-size: 18px;
color:  #FFFFFF;
margin-bottom: 34px;
`;

