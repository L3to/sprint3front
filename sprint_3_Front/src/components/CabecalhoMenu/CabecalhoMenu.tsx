import { Link } from "react-router-dom";
import { Nav,MenuList,MenuItem} from "../../style/styled";

export default function CabecalhoMenu(){
    return(
      <Nav>
        <MenuList>
            <MenuItem> <Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/nossaequipe">Nossa Esquipe</Link></MenuItem>
        </MenuList>
      </Nav>
    );
  }