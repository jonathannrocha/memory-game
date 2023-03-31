import styled from "styled-components";

interface ContaneirsProps {
  showBackground: boolean;
}
export const Contaneir = styled.div<ContaneirsProps>`
  background-color: ${(props) =>
    props.showBackground ? "#1550FF" : "#E2E3E3"};
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface IconProps {
  opacity?: number;
}
export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;
  opacity: ${(props) => props.opacity};
`;
