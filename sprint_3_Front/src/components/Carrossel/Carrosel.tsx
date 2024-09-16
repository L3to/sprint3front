import { CarrosselLista } from '../../listaCarrossel';
import { CarroselIntegrantes } from '../../style/styled';
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs';

interface CarrosselProps {
  imagens: CarrosselLista[];
}

export const Carrossel = ({ imagens }: CarrosselProps) => {
  return (
    <div>
      <CarroselIntegrantes>
      <BsArrowLeftCircleFill/>
      {imagens.map((item: CarrosselLista, idx: number) => (
        <img src={item.imagem} alt={`Imagem ${idx}`} key={idx} />
      ))}
      <BsArrowRightCircleFill/>
      <span>
        {imagens.map((item: CarrosselLista, idx: number) => (
          <button key={idx} onClick={() => {}}>
            {`Imagem ${idx + 1}`} {/* Optional: Add content to the button */}
          </button>
        ))}
      </span>
      </CarroselIntegrantes>
    </div>
  );
};