import { useState } from "react";
import { Link, To, useNavigate } from "react-router-dom";
import ConsertoCarro from "../../assets/img/consertocarro.jpg";
import Computador from "../../assets/img/hcomputador.png";
import Equipe from "../../assets/img/equipe.jpg";
import { AvisoLogin, DashboardLayout } from "../../style/styled";
import Chatbot from "../../assets/img/chatbotzinho.png";
import DamageDetection from "../../assets/img/cardamage.jpg";

export default function Dashboard() {
  const [exibirAviso, setExibirAviso] = useState(false);
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const navigate = useNavigate();

  const handleClick = (path: To) => {
    if (usuarioLogado) {
      setExibirAviso(true);
      setTimeout(() => {
        setExibirAviso(false);
      }, 3000);
    } else {
      navigate(path);
    }
  };

  return (
    <div>
      <AvisoLogin>
      {exibirAviso && (
        <div className="aviso">
          <p>Você já está logado!</p>
        </div>
      )}
      </AvisoLogin>
      <DashboardLayout>
        <div className="container-imagem">
          <Link className="hoverimage" onClick={() => handleClick("/login")} to={""}>
            <img src={Computador} alt="Computador" />
            <div className="overlay">
              <div className="informacoes">
                <h3>Faça seu Login!</h3>
                <p>Faça já seu cadastro e não perca mais nada!</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="container-imagem">
          <Link className="hoverimage" to={"iamodelo"}>
            <img src={DamageDetection} alt="Damage Detection" />
            <div className="overlay">
              <div className="informacoes">
                <h3>Conheça sobre nosso modelo de deteccção automática!</h3>
                <p>Qualquer dano físico que seu carro tiver, nosso modelo identificará!</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="container-imagem">
          <Link className="hoverimage" to={"/consertocarro"}>
            <img src={ConsertoCarro} alt="Conserto Carro" />
            <div className="overlay">
              <div className="informacoes">
                <h3>Saiba mais sobre nosso serviço de conserto!</h3>
                <p>Descubra como podemos ajudar a manter seu carro em perfeitas condições.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="container-imagem">
          <Link className="hoverimage" to={"/nossaequipe"}>
            <img src={Equipe} alt="Equipe" />
            <div className="overlay">
              <div className="informacoes">
                <h3>Conheça nossa equipe!</h3>
                <p>Saiba mais sobre os profissionais que trabalham para oferecer o melhor serviço.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="container-imagem">
          <Link className="hoverimage" to={"/chatbot"}>
            <img src={Chatbot} alt="Chatbot" />
            <div className="overlay">
              <div className="informacoes">
                <h3>Oi, eu sou a Turbina! Venha conversar comigo!</h3>
              </div>
            </div>
          </Link>
        </div>
      </DashboardLayout>
    </div>
  );
}
