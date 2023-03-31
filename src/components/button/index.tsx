import * as C from "./style";

interface btProps {
  label: string;
  icon?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export function Button({ icon, label, onClick }: btProps) {
  return (
    <C.Contanier onClick={onClick}>
      {icon && (
        <C.IconArea>
          <C.Icon src={icon} />
        </C.IconArea>
      )}

      <C.Label>{label}</C.Label>
    </C.Contanier>
  );
}
