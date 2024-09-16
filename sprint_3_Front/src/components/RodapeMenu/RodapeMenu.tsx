import { Link } from "react-router-dom";
import { Divisoria, RodapeMenuItens} from "../../style/styled";

export default function RodapeMenu(){
    return(
        <RodapeMenuItens>
            <Link to="/">Home</Link>
            <Link to="/nossaequipe">Nossa Equipe</Link>
            <Divisoria/>
            <a>LLA TECH 2024 © All rights deserved</a>
            <Link to="/1">Termos de Uso</Link>
            <Link to="/1">Privacidade</Link>
            <Link to="/1">Cookies</Link>
        </RodapeMenuItens>
        
    );
  }