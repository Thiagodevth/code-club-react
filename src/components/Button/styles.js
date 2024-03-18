import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 68px;
color: #FFFFFF;
background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : ' #D93856'}; 
margin-top: ${props => props.isBack && '33px'};
border: none;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 28px;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}

img{ 
    transform: ${props => props.isBack && 'rotateY(180deg)'};
}
`;