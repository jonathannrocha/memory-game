import styled from "styled-components";

export const Contanier = styled.div`
  width: 100vw;
  max-width: 750px;
  margin: auto;
  display: flex;
  padding: 50px 0;

  @media (max-width: 750) {
    flex-direction: column;
  }
`;
export const info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 750) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const logLink = styled.div`
  display: block;
`;

export const infoArea = styled.div`
  width: auto;
  margin: 10px 0;

  @media (max-width: 750) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const cardArea = styled.div`
  flex: 1;
  display: grid;
  justify-content: flex-end;

  @media (max-width: 750) {
    margin: 0 20px;
    justify-content: center;
  }
`;

export const CardGrid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
