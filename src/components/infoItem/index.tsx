import * as C from "./style";

interface infoProps {
  label: string;
  value: String;
}
export function InfoItem({ label, value }: infoProps) {
  return (
    <C.Contanier>
      <C.Label>{label}</C.Label>
      <C.Value>{value}</C.Value>
    </C.Contanier>
  );
}
