import { Header } from "../../style/styled";
import CabecalhoMenu from "../CabecalhoMenu/CabecalhoMenu";

export default function Cabecalho(){
  return(
    <Header>
      <h1>Cabeçalho</h1>
      <CabecalhoMenu/>
    </Header>
  );
}