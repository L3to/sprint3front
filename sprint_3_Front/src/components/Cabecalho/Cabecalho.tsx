import { Header } from "../../style/styled";
import CabecalhoMenu from "../CabecalhoMenu/CabecalhoMenu";
import PortoLogo from "../../assets/img/porto_logo.png";
import { Link } from "react-router-dom"; 

export default function Cabecalho(){
  return(
    <Header>
      <Link to="/"><img src={PortoLogo} alt="Logo Porto" className="Logo_Header"/></Link>
      <CabecalhoMenu/>
    </Header>
  );
}