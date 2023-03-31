import { Gridtype } from "../../@types/gridType";
import * as C from "./style";
import b7 from "../../assets/svgs/b7.svg";
import { itens } from "../../data/itens";

interface cardProps {
  item: Gridtype;
  onClick: () => void;
}
export function Card({ item, onClick }: cardProps) {
  return (
    <C.Contaneir
      showBackground={item.permanentShow || item.show}
      onClick={onClick}
    >
      {!item.permanentShow && !item.show && <C.Icon src={b7} alt="" />}
      {(item.permanentShow || item.show) && item.item !== null && (
        <C.Icon src={itens[item.item].icon} alt="" opacity={0.1} />
      )}
    </C.Contaneir>
  );
}
