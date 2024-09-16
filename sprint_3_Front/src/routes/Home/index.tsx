import { Link } from "react-router-dom";
import { Faixa, HomeLayout } from "../../style/styled";
import Dashboard from "../../components/Dashboard/Dashboard";
import BotoesCentroAutomotivo from "../../components/BotoesCentroAutomotivo/BotoesCentroAutomotivo";

export default function Home(){
  document.title = "Home";

    return(
      <div>
      <HomeLayout>
        <p className="Rotas">
          <Link to="/">
            <b>Home</b>
          </Link>
          &nbsp;/ Turbina
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