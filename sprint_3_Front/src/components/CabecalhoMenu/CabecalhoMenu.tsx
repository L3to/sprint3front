import PortoSaude from "../../assets/img/portosaude.png";
import PortoSeguro from "../../assets/img/portoseguro.png";
import PortoServico from "../../assets/img/portoservico.png";
import PortoBank from "../../assets/img/portobank.png";
import { SubHeader } from "../../style/styled";

export default function CabecalhoMenu(){
    return(
      <div>
        <SubHeader>
            <img src={PortoSeguro} alt="Logo Porto Seguro" />
            <img src={PortoSaude} alt="Logo Porto Saúde" />
            <img src={PortoServico} alt="Logo Porto Serviço" />
            <img src={PortoBank} alt="Logo Porto Bank" />
        </SubHeader>
      </div>
    );
  }