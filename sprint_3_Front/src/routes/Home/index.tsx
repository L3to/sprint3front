import { Link } from "react-router-dom";
import { Faixa, HomeLayout } from "../../style/styled";
import Dashboard from "../../components/Dashboard/Dashboard";
import BotoesCentroAutomotivo from "../../components/BotoesCentroAutomotivo/BotoesCentroAutomotivo";
import { useEffect, useState } from "react";
import { useLogout } from "../../components/LoginSignup/useLogout";

window.watsonAssistantChatOptions = {
  integrationID: "4917237a-1f82-4a53-80c3-2e00f47ebd92", 
  region: "au-syd",
  serviceInstanceID: "62533943-3488-4541-b5fe-0bd708c9584f", 
  onLoad: async (instance: { render: () => unknown; }) => { await instance.render(); }
};

setTimeout(function() {
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});


export default function Home() {
  document.title = "Home";

  const [usuarioLogado, setUsuarioLogado] = useState("");
  const [mostrarBoasVindas, setMostrarBoasVindas] = useState(true);

  useEffect(() => {
    const usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
      setUsuarioLogado(usuario);
    }
  }, []);

  const realizarLogout = useLogout(() => {
    setMostrarBoasVindas(false);
    setUsuarioLogado(""); 
  });

  return (
    <div>
      <HomeLayout>
        <p className="Rotas">
          <Link to="/">
            <b>Home</b>
          </Link>
          &nbsp;/ Turbina
          &nbsp;<b>
            {mostrarBoasVindas && usuarioLogado && `Bem-vindo, ${usuarioLogado}!`}
            {mostrarBoasVindas && !usuarioLogado && <span className="invisivel">Bem-vindo!</span>}
          </b>
          &nbsp;
          {usuarioLogado && mostrarBoasVindas && <a className="btnSair" onClick={realizarLogout}>Sair?</a>}
        </p>
        <div className="dashboard">
        <Dashboard />
        </div>
      </HomeLayout>
      <Faixa>
        <div>
          <h2>SERVIÇOS DISPONÍVEIS NO <b>CENTRO AUTOMOTIVO</b></h2>
        </div>
      </Faixa>
      <BotoesCentroAutomotivo />
    </div>
  );
}