import { Outlet } from "react-router-dom";
import Rodape from "./components/Rodape/Rodape";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import { GlobalStyle } from "./style/styled";

function App() {
    return (
        <div>
        <GlobalStyle/>
        <Cabecalho/>
            <Outlet/>
        <Rodape/>
        </div>
    );
}

export default App;