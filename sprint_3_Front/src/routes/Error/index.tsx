import { Link } from "react-router-dom";
import errorImage from "../../assets/img/404_image.png";
import { GlobalStyle, Layout404 } from "../../style/styled";

export default function Error() {
  document.title = "Erro 404";

  return (
    <div>
      <GlobalStyle />
      <Layout404>
        <img src={errorImage} alt="Erro 404" />
        <h1>Erro 404 - Página não encontrada!</h1>
        <Link to={"/"} className="btnhover">
          Volte para a página principal por aqui!
        </Link>
      </Layout404>
    </div>
  );
}
