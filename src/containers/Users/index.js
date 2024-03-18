import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Sacola from '../../assets/burger-saco.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainersItens";
import Button from '../../components/Button';

import {
  Container,
  Image,
  User,
  DivUser
} from "./styles"

function Users() {
  //const users = [];
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const minhaUrl = "https://api-register-order.vercel.app"



  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get(`${minhaUrl}`);

      setUsers(newUser);
    }
    fetchUsers();
  }, [users])

  async function deleteUser(userId) {
    await axios.delete(`${minhaUrl}/order/${userId}`)
    const newUsers = users.filter((user) => user.id == userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (

    <Container>

      <Image alt="logo-imagem-burger-saco" src={Sacola}></Image>

      <ContainerItens>
        <H1> Pedidos </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>

              <DivUser>
                <p>{user.order}</p>
                <p>{user.name}</p>
              </DivUser>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo"></img>
              </button>

            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img src={Arrow} alt="seta"></img>
          Voltar
        </Button>

      </ContainerItens>
    </Container>

  );
}

export default Users