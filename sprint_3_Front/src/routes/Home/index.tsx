import { Link } from "react-router-dom";
import { Faixa, HomeLayout } from "../../style/styled";
import Dashboard from "../../components/Dashboard/Dashboard";

export default function Home(){
  document.title = "Home";

    return(
      <div>
      <HomeLayout>
        <p className="Rotas">
          <Link to="/" className="rotas-link">
            <b>Home</b>
          </Link>
          &nbsp;/ Porto Seguro
        </p>
        <Dashboard />
      </HomeLayout>
      <Faixa>
      <div>
      <h2>SERVIÇOS DISPONÍVEIS</h2>
    </div>
    </Faixa>
    
    </div>
    );
  }