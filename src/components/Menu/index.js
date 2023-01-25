import React from "react";
import { RxActivityLog } from "react-icons/rx";
import {
  Container,
  Title,
  OrderButton,
  AreaButtons
} from "./styles";


const Menu = (props) => {
  return (
    <AreaButtons>
      <OrderButton>
        Ordenar
        <RxActivityLog color="white" />

      </OrderButton>
      <a target="_blank" href={props?.link}>
        <Container>
          <img src="https://avatars.githubusercontent.com/u/54483760?v=4"
            alt="imagem do filme" style={{ width: 40, height: 40, resizeMode: 'contain', borderRadius: 15 }} />
          <Title>Sobre mim</Title>
        </Container>
      </a>
    </AreaButtons>
  );
};

export default Menu;
