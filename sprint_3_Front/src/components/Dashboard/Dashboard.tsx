import ConsertoCarro from "../../assets/img/consertocarro.jpg";
import Computador from "../../assets/img/hcomputador.png";
import Equipe from "../../assets/img/equipe.jpg";
import { DashboardLayout } from "../../style/styled";
import Chatbot from "../../assets/img/chatbotzinho.png";
import DamageDetection from "../../assets/img/cardamage.jpg";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div>
    <DashboardLayout>
      <div className="container-imagem">
        <Link className="hoverimage" to="/login">
          <img src={Computador} alt="Computador" />
          <div className="overlay">
            <div className="informacoes">
              <h3>Faça seu Login!</h3>
              <p>Já faça já seu cadastro!</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="container-imagem">
        <img src={DamageDetection} alt="Damage Detection" />
      </div>
      <div className="container-imagem">
        <img src={ConsertoCarro} alt="Conserto Carro" />
      </div>
      <div className="container-imagem">
        <img src={Equipe} alt="Equipe" />
      </div>
      <div className="container-imagem">
        <img src={Chatbot} alt="Chatbot" />
      </div>
    </DashboardLayout>
  </div>
    </div>
  );
}
