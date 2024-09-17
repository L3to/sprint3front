import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

body {
  font-family: 'Poppins', sans-serif; 
  font-size: 16px;
  color: #333;
}
`;

// FOOTER
export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  text-align: center;
  padding: 1rem;
  width: 100%;
  margin-top: auto;
  left: 0;
  top: 100rem;
  min-height: 7vh;
  @media (max-width: 1048px) {
    display: none;
  }
`;

export const Divisoria = styled.div`
  border-left: 1px solid #27a1da;
  height: 2rem;
  margin: 0 1rem;
`;

export const RodapeMenuItens = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  & a {
    color: #27a1da;
    font-weight: lighter;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }
`;

//HEADER
export const Header = styled.header`
  position: sticky;
  background-color: #00a2fc;
  text-align: center;
  .Logo_Header {
    width: 180px;
    padding: 1vw;
    filter: brightness(0) invert(1);
    @media (max-width: 1000px) {
      width: 200px;
    }
  }
  @media (max-width: 1000px) {
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0.5rem;
  height: 3.5rem;

  & img {
    bottom: 20px;
    width: 170px;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

// ERROR
export const Layout404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  background-color: #2a56c0;
  color: white;
  text-align: center;
  font-size: 1.5em;
  height: 100vh;
  flex-direction: column;

  & img {
    width: 40rem;
    max-width: 100%;
  }

  & .btnhover {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
    border: 2px solid white;
    border-radius: 5px;
    @media (max-width: 450px) {
      font-size: 0.7em;
    }
  }
  .btnhover:hover {
    background-color: white;
    color: #2a56c0;
  }
  h1 {
    margin-bottom: 1rem;
  }
`;

//INTEGRANTES
export const CarroselIntegrantes = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & .slide {
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #666;
    transition: all 0.3s ease;
    width: 600px;
    height: 600px;
    @media (max-width: 1048px) {
      width: 400px;
      height: 400px;
    }
    @media (max-width: 400px) {
      width: 300px;
      height: 300px;
    }
  }
  .slide-escondido {
    display: none;
  }
  & .arrow {
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: white;
    filter: drop-shadow(0px 0px 5px #555);
    transition: color 0.3s ease;
  }
  & .arrow-left {
    left: 1rem;
  }
  & .arrow-right {
    right: 1rem;
  }
  & .arrow:hover {
    cursor: pointer;
    color: black;
  }
  & .indicadores {
    display: flex;
    position: absolute;
    bottom: 1rem;
  }
  & .indicador {
    background-color: white;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    border: none;
    outline: none;
    box-shadow: 0px 0px 5px #555;
    margin: 0 0.2rem;
    cursor: pointer;
  }
  & .indicador-inativo {
    background-color: #999;
  }

  & .descricao {
    position: absolute;
    bottom: 6%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    padding: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;
export const CarrosselLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  @media (max-width: 1048px) {
    padding: 0;
  }
  & h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #00428c;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5rem;
  }
`;

export const DecoracaoDevs = styled.div`
  position: absolute;
  top: 15rem;
  right: 0;
  opacity: 0.8;
  z-index: -9999;

  & img {
    width: 30vw;
  }
`;

export const DecoracaoDevs2 = styled.div`
  position: absolute;
  top: 15rem;
  left: 0;
  opacity: 0.8;
  z-index: -9999;
  & img {
    width: 30vw;
  }
`;

//HOME

export const HomeLayout = styled.div`
  display: flex;
  padding: 2rem;
  padding-bottom: 0;
  flex-direction: column;
  .Rotas {
    text-decoration: none;
    color: #00428c;
    font-size: 120%;
    @media (max-width: 1048px) {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      padding-top: 0;
    }
  }
  .Rotas a {
    color: #00428c;
    text-decoration: none;
  }
  .temporario {
    @media (max-width: 450px) {
      display: none;
    }
  }
  .invisivel {
    visibility: hidden;
  }
  .btnSair {
    color: #00428c;
    cursor: pointer;
  }
  .btnSair:hover {
    color: #00428c;
    text-decoration: underline;
  }
  .dashboard {
    display: flex;
    justify-content: center;
  }
`;
export const Faixa = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  color: #27a1da;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  & h2 {
    font-size: 1.5rem;
    font-weight: lighter;
    @media (max-width: 650px) {
      font-size: 1rem;
    }
  }
`;
export const BotaoCentroAutomotivo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
  padding: 2rem;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 0.2rem;
    padding: 0;
  }
  & img {
    width: 3rem;
    height: 3rem;
    padding-bottom: 0.5rem;
  }
  .botao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #00428c;
    font-weight: bold;
    padding: 1rem;
  }
  .botao:hover {
    background-color: #00428c;
    color: white;
    border-radius: 1rem;
    & img {
      filter: brightness(0) invert(1);
    }
  }
`;

//DASHBOARD

export const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  padding: 2rem;
  max-width: 1900px;
  @media (max-width: 650px) {
    gap: 1rem;
    padding: 1rem;
    height: 300px;
  }
  grid-template-areas:
    "item1 item2 item5"
    "item3 item4 item5";

  .container-imagem {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 1rem;
  }

  .container-imagem img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    display: block;
    transition: transform 0.5s;
  }

  .container-imagem:nth-child(1) {
    grid-area: item1;
  }

  .container-imagem:nth-child(2) {
    grid-area: item2;
  }

  .container-imagem:nth-child(3) {
    grid-area: item3;
  }

  .container-imagem:nth-child(4) {
    grid-area: item4;
  }

  .container-imagem:nth-child(5) {
    grid-area: item5;
    grid-column: span 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s;
  }

  .informacoes {
    text-align: center;
    font-size: 20px;
    padding: 1rem;
  }

  .container-imagem:hover img {
    transform: scale(1.1);
  }

  .container-imagem:hover .overlay {
    opacity: 1;
  }
`;
export const AvisoLogin = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  .aviso {
    z-index: 999999;
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    @media (max-width: 1000px) {
      width: 20rem;
      font-size: 1rem;
    }
  }
`;

//LOGIN
export const BackgroundLogin = styled.div`
  display: flex;
  height: 80vh;
  background: linear-gradient(135deg, #007bff 0%, #0062cc 50%, #003d99 100%);
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    min-height: 100vh;
  }
`;
export const LoginLayout = styled.div`
  .login-container {
    display: flex;
    flex-direction: column;
    background: white;
    margin: auto;
    width: 900px;
    padding-bottom: 30px;
    border-radius: 10px;
    @media (max-width: 1000px) {
      width: 500px;
    }
    @media (max-width: 500px) {
      width: 350px;
    }
  }
  .headerlogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: 30px;
  }
  .texto {
    font-size: 48px;
    font-weight: bold;
    color: #0056b3;
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  .underline {
    width: 61px;
    height: 6px;
    background: #0056b3;
    border-radius: 10px;
    @media (max-width: 500px) {
      width: 40px;
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 55px;
  }
  .input {
    display: flex;
    align-items: center;
    width: 480px;
    height: 80px;
    margin: auto;
    background: #eaeaea;
    border-radius: 10px;
    padding: 0px 20px;
    @media (max-width: 500px) {
      width: 200px;
      height: 40px;
    }
  }
  .input img {
    margin: 0px 30px;
    width: 50px;
    height: 50px;
    @media (max-width: 500px) {
      width: 90px;
      height: 30px;
      margin: 0px 15px;
    }
  }
  .input input {
    width: 400px;
    height: 50px;
    border: none;
    color: black;
    background: transparent;
    outline: none;
    font-size: 24px;
    @media (max-width: 500px) {
      width: 100px;
      height: 40px;
    }
  }

  .submit-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 60px;
  }
  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 60px;
    background: #0056b3;
    border-radius: 50px;
    font-size: 24px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    @media (max-width: 500px) {
      width: 120px;
      height: 40px;
      font-size: 14px;
    }
  }
  .error-message {
    color: red;
    background-color: #fdd;
    border: 1px solid red;
    padding: 10px;
    margin-top: 10px;
    animation: desaparecer 3s ease-out forwards;
  }

  @keyframes desaparecer {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
