import React, { useState } from "react";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import ReactLoading from 'react-loading';
import List from "./list.json";

import {
  Container,
  Content,
  AreaTitle,
  Title,
  ContainerLimit,
  Header
} from "./styles";


const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, "2000")

  return (
    <>
      <Container>
        <Header><ContainerLimit>
          {!loading ?
            <AreaTitle>
              <Title>MareaFilms</Title>
              <Menu link="https://lucasvmirandadev.netlify.app/" />
            </AreaTitle>
            : <></>}</ContainerLimit></Header>
        <ContainerLimit>
          <Content>
            {loading ? <ReactLoading type="cylon" color="#673ab7" height={667} width={375} /> : <>
              {List?.map(item => (
                <Cards name={item?.name} director={item?.director} year={item?.year} img={item?.img} country={item?.country} link={item?.link} />
              ))}
            </>
            }
          </Content>
        </ContainerLimit>
        <Footer />
      </Container>

    </>
  );
};

export default Home;
