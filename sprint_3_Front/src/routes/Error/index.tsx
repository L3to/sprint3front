import Rodape from '../../components/Rodape/Rodape';
import errorImage from '../../img/404_image.png';
import { GlobalStyle, Layout404 } from '../../style/styled';

export default function Error() {
  document.title = "Erro 404";

  return (
    <div>
      <GlobalStyle/>
      <Layout404>
        <h1>Erro 404 - Página não encontrada</h1>
        <img src={errorImage} alt="Erro 404" />
      </Layout404>
      <Rodape/>
    </div>
  );
}