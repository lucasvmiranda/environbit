import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  height: 800px;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1350px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 40px;
  }

`;

export const ContainerLimit = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;

export const AreaTitle = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    display: grid;
    height: 100%;
  }

`;

export const Title = styled.p`
  font-size: 48px;
  color: white;
;`

export const Header = styled.div`
  width: 100%;
  height: 100px;
  /* background: rgb(32,32,32);
  background: linear-gradient(0deg, rgba(32,32,32,1) 17%, rgba(0,0,0,1) 96%); */

  @media (max-width: 650px) {
    display: grid;
    height: 100px;
  }
`;

