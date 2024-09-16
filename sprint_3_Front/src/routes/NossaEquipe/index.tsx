import { Carrossel } from "../../components/Carrossel/Carrosel";

import { listaCarrossel } from "../../listaCarrossel";
import { CarrosselLayout } from "../../style/styled";

export default function Equipe() {
  document.title = "Nossa Equipe";
  return (
    <div>
      <CarrosselLayout>
      <h1>NOSSA EQUIPE</h1>
      <Carrossel imagens={listaCarrossel}/>
      </CarrosselLayout>
    </div>
  );
}