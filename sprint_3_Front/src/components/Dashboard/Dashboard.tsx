import ConsertoCarro from "../../assets/img/consertocarro.jpg";
import Computador from "../../assets/img/hcomputador.png";
import Equipe from "../../assets/img/equipe.jpg";
import { AvisoLogin, DashboardLayout } from "../../style/styled";
import Chatbot from "../../assets/img/chatbotzinho.png";
import DamageDetection from "../../assets/img/cardamage.jpg";
import { Link, To, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const [exibirAviso, setExibirAviso] = useState(false);
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const navigate = useNavigate();

  const handleClick = (path: To) => {
    if (usuarioLogado) {
      navigate(path);
    } else {
      setExibirAviso(true);
      setTimeout(() => {
        setExibirAviso(false);
      }, 3000);
    }
  };

  window.watsonAssistantChatOptions = {
    integrationID: "4917237a-1f82-4a53-80c3-2e00f47ebd92", 
    region: "au-syd",
    serviceInstanceID: "62533943-3488-4541-b5fe-0bd708c9584f", 
    onLoad: async (instance) => { await instance.render(); }
  };

  setTimeout(function() {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

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
          <Link className="hoverimage" to={"/login"} onClick={() => handleClick("/login")}>
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
          <Link className="hoverimage" to={"/modeloIA"}>
            <img src={DamageDetection} alt="Detecção de danos em automóveis" />
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
          <Link className="hoverimage" to={""}>
            <img src={Chatbot} alt="Chatbot" />
            <div className="overlay">
              <div className="informacoes">
                <h3>Oi, eu sou a Turbina! Venha conversar comigo!</h3>
                <p>Estou no canto inferior direito da sua tela!</p>
              </div>
            </div>
          </Link>
        </div>
      </DashboardLayout>
    </div>
  )};