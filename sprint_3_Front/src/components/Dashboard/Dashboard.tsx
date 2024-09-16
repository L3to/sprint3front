import ConsertoCarro from "../../assets/img/consertocarro.jpg"
import Computador from "../../assets/img/hcomputador.png"
import Equipe from "../../assets/img/equipe.jpg"
import { DashboardLayout } from "../../style/styled";
import Chatbot from "../../assets/img/chatbotzinho.png"

export default function Dashboard(){
    return(
      <div>
        <DashboardLayout>
        <img src={Computador} alt="" />
        <img src={Computador} alt="" />
        <img src={ConsertoCarro} alt="" />
        <img src={Equipe} alt="" />
        <img src={Chatbot} alt="" />
        
        </DashboardLayout>
      </div>
    );
  }
;