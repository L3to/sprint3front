import { Carrossel } from "../../components/Carrossel/Carrossel";
import devs from "../../assets/img/devstrabalhando.jpg";
import devs2 from "../../assets/img/devstrabalhando2.svg";
import { listaCarrossel } from "../../listaCarrossel";
import { CarrosselLayout, DecoracaoDevs, DecoracaoDevs2, HomeLayout } from "../../style/styled"; 
import { Link } from "react-router-dom";

export default function Equipe() {
  document.title = "Nossa Equipe";
  
  return (
    <div>
      <HomeLayout>
      <p className="Rotas">
          <Link to="/">
            <b>Home</b>
          </Link>
          &nbsp;/ Nossa Equipe
        </p>
        </HomeLayout>
      <CarrosselLayout>
        <h1>NOSSA EQUIPE</h1>
        <Carrossel imagens={listaCarrossel}/>           
        <DecoracaoDevs>
          <img src={devs} alt="Desenvolvedores trabalhando desenho"/> 
          </DecoracaoDevs>
          <DecoracaoDevs2>
          <img src={devs2} alt="Outro desenho dos desenvolvedores trabalhando"/> 
        </DecoracaoDevs2>
      </CarrosselLayout>
      </div>
  );
}