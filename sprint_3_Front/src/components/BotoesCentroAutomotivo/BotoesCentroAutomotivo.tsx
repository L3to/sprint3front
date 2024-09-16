
import Motor from '../../assets/img/motor.png';
import Pneu from '../../assets/img/pneu.png';
import Oleo from '../../assets/img/oleo.png';
import Parabrisa from '../../assets/img/parabrisa.png';
import Extintor from '../../assets/img/extintor.png';
import Eletrica from '../../assets/img/elétrica.png';
import { Link } from 'react-router-dom';
import { BotaoCentroAutomotivo } from '../../style/styled';

export default function BotoesCentroAutomotivo(){
  return(
    <div>
      <BotaoCentroAutomotivo>
      <div>
      <Link className='botao' to="/direcao-pneus">
        <img src={Pneu} alt="Direção" />
        <p>Direção</p>
      </Link>
      </div>
      <div>
      <Link className='botao' to="/oleo-filtro">
        <img src={Oleo} alt="Óleo" />
        <p>Óleo </p>
      </Link>
      </div>
      <div>
      <Link to="/parabrisa" className='botao'>
        <img src={Parabrisa} alt="Parabrisa" />
        <p>Parabrisa</p>
      </Link>
      </div>
      <div>
      <Link className='botao' to="/motor">
        <img src={Motor} alt="Motor" />
        <p>Motor</p>
      </Link>
      </div>
      <div>
      <Link className='botao' to="/eletrica">
        <img src={Eletrica} alt="Elétrica" />
        <p>Elétrica</p>
      </Link>
      </div>
      <div>
      <Link className='botao' to="/extintor">
        <img src={Extintor} alt="Extintor" />
        <p>Extintor</p>
      </Link>
      </div>
    </BotaoCentroAutomotivo>
  </div>
);
}