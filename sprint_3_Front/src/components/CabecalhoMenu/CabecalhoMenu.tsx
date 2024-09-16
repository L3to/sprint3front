import PortoSaude from "../../assets/img/portosaude.png";
import PortoSeguro from "../../assets/img/portoseguro.png";
import PortoServico from "../../assets/img/portoservico.png";
import PortoBank from "../../assets/img/portobank.png";
import { SubHeader } from "../../style/styled";

export default function CabecalhoMenu(){
    return(
      <div>
        <SubHeader>
            <img src={PortoSeguro} alt="" />
            <img src={PortoSaude} alt="" />
            <img src={PortoServico} alt="" />
            <img src={PortoBank} alt="" />
        </SubHeader>
      </div>
    );
  }