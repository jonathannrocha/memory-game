import styled from "styled-components";

export const Contanier = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  background-color: #1550ff;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  opacity: 1;
  transform: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const Icon = styled.img`
  width: 20px;
`;

export const Label = styled.div`
  height: inherit;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`;
