import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Title,
  Description,
  AreaDescription,
  DescriptionArea,
} from "./styles";


const Cards = (props) => {
  return (

    <>
      <a target="_blank" href={props?.link}>
        <Container>

          <img src={props?.img}
            alt="imagem do filme" style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 15 }} />

          <AreaDescription>


            <DescriptionArea>
              <Title>{props?.name}</Title>,
              <Description>{props?.director}</Description>
              <Description>{props?.country}</Description>
              <Description>{props?.year}</Description>

            </DescriptionArea>
          </AreaDescription>
        </Container>
      </a>
    </>
  );
};

export default Cards;
