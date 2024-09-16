import Luizc from "./assets/img/luizc.png";
import Luizk from "./assets/img/luizk.jpg";
import Alice from "./assets/img/alice.jpg";

export type CarrosselLista = {
  imagem: string; 
  descricao: string;
}

export const listaCarrossel: CarrosselLista[] = [
  { imagem: Luizc, descricao: 'Luiz Felipe Campos da Silva - RM555591' },
  { imagem: Luizk, descricao: 'Luiz Sadao Kamada - RM557652' },
  { imagem: Alice, descricao: 'Alice Teixeira Caldeira - RM556293' }
];