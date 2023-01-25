import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 0px solid  gray;
  cursor: pointer;

  :hover{
    background-color: #673ab7;
    transition: all 0.4s;
  }
`;

export const Title = styled.div`
  color: white;
`;


export const OrderButton = styled.div`
  width: 100px;
  height: 50px;
  align-items: center;  
  display: flex;
  justify-content: center;
  color: white;
  justify-content: space-around;
  cursor: pointer;

  :hover{
    background-color: #673ab7;
    transition: all 0.4s;
  }

`;

export const AreaButtons = styled.div`
  width: 300px;
  display: flex;
  align-items: center;  
  justify-content: space-around;
`;