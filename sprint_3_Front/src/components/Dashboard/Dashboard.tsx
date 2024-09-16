import ConsertoCarro from "../../assets/img/consertocarro.jpg"
import Computador from "../../assets/img/hcomputador.png"
import { DashboardLayout } from "../../style/styled";
export default function Dashboard(){
    return(
      <div>
        <DashboardLayout>
        <img src={ConsertoCarro} alt="" />
        <img src={Computador} alt="" />
        <img src={Computador} alt="" />
        <img src={Computador} alt="" />
        <img src={Computador} alt="" />
        </DashboardLayout>
      </div>
    );
  }
;