import React, { useState, useRef } from "react";
import {useNavigate} from 'react-router-dom';

import axios from 'axios';

import People from '../../assets/burger.svg'
import Arrow from '../../assets/arrow.svg'

import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainersItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input
} from "./styles"

function App() {
  //const users = [];
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputOrder = useRef();

  const minhaUrl = "https://code-club-node.vercel.app"

  async function addNewUser() {
    const { data: newUser } = await axios.post(`${minhaUrl}/order`,
      {
        order: inputOrder.current.value,
        name: inputName.current.value,
      })

    //(...) => Spread Operator
    setUsers([...users, newUser]);
    
    navigate("/usuarios")

  };

  return (

    <Container>

      <Image alt="logo-imagem-burger" src={People}></Image>

      <ContainerItens>

        <H1> Faça Seu Pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Guaraná, 1 X-Bacon"></Input>

        <InputLabel>Nome Do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Johnnie Walker"></Input>

        <Button onClick={addNewUser}>
          Novo Pedido
          <img src={Arrow} alt="seta"></img>
        </Button>

      </ContainerItens>
    </Container>

  );
}

export default App