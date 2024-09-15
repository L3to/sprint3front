import { Link } from "react-router-dom";
import { MenuList,MenuItem} from "../../style/styled";

export default function RodapeMenu(){
    return(
        <MenuList>
            <MenuItem> <Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/nossaequipe">Nossa Equipe</Link></MenuItem>
            <MenuItem><a>LLA TECH © All rights deserved</a></MenuItem>
        </MenuList>
    );
  }