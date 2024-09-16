import { useState } from 'react';
import { CarrosselLista } from '../../listaCarrossel';
import { CarroselIntegrantes } from '../../style/styled';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

interface CarrosselProps {
  imagens: CarrosselLista[];
}

export const Carrossel = ({ imagens }: CarrosselProps) => {
  const [slide, setSlide] = useState(0);

  const proximoSlide = () => {
    setSlide((slideAnterior) => (slideAnterior === imagens.length - 1 ? 0 : slideAnterior + 1));
  };

  const slideAnterior = () => {
    setSlide((slideAnterior) => (slideAnterior === 0 ? imagens.length - 1 : slideAnterior - 1));
  };

  const irParaSlide = (idx: number) => {
    setSlide(idx);
  };

  return (
    <div>
      <CarroselIntegrantes>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={slideAnterior} />
        {imagens.map((item: CarrosselLista, idx: number) => (
          <div key={idx} className={slide === idx ? 'slide' : 'slide slide-escondido'}>
          <img className='slide'
            src={item.imagem}
            alt={`Imagem ${idx}`}
          />
          <div className='descricao'>{item.descricao}</div>
          </div>
        ))}
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={proximoSlide} />
        <span className='indicadores'>
          {imagens.map((_item: CarrosselLista, idx: number) => (
            <button
              key={idx}
              onClick={() => irParaSlide(idx)}
              className={slide === idx ? 'indicador' : 'indicador indicador-inativo'}
            />
          ))}
        </span>
      </CarroselIntegrantes>
    </div>
  );
};