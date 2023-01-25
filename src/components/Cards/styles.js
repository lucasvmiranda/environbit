import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
  border-radius: 25px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  :hover{
    background-color: red;
  }
`;

export const AreaDescription = styled.div`
  width: 300px;
  height: 400px;
  position: absolute;
  align-items: center;
  border-radius: 15px;
  opacity: 0.0;

  :hover {
    opacity: 0.8;
    background-color: black;
    transition: all 0.4s;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

  }
`;

export const DescriptionArea = styled.div`
  width: 300px;
  height: 250px;
  align-items: center;
  border-left: 5px solid gray;
  padding: 5px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  color: white;
;`

export const Description = styled.p`
  font-size: 14px;
  color: white;
;`

