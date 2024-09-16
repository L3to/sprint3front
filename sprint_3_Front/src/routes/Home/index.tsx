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
    setUsuarioLogado(""); // Atualiza o estado do usuário logado
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
          {usuarioLogado && mostrarBoasVindas && <button onClick={realizarLogout}>Sair</button>}
        </p>
        <Dashboard />
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