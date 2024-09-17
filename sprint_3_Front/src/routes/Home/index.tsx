import { Link } from "react-router-dom";
import { Faixa, HomeLayout } from "../../style/styled";
import Dashboard from "../../components/Dashboard/Dashboard";
import BotoesCentroAutomotivo from "../../components/BotoesCentroAutomotivo/BotoesCentroAutomotivo";
import { useEffect, useState } from "react";
import { useLogout } from "../../components/LoginSignup/useLogout";

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
          &nbsp;<b className="temporario">
        
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
          <h2>SERVIÇOS DISPONÍVEIS NO <b>CENTRO AUTOMOTIVO</b></h2>
      </Faixa>
      <BotoesCentroAutomotivo />
    </div>
  );
}