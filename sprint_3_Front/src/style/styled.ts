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
`

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
  min-height: 10vh; 
`;

export const Divisoria = styled.div`
  border-left: 1px solid #27a1da;
  height: 2rem;
  margin: 0 1rem;
  `;


export const RodapeMenuItens = styled.ul`
  list-style-type: none;
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
  background-color: #00a2fc;
  text-align: center;
  .Logo_Header {
    width: 12vw;
    padding: 1vw;
    filter: brightness(0) invert(1);
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
    bottom: 2vw;
    width: 8vw;
    cursor: pointer;
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

  & 
  .btnhover {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
    border: 2px solid white; 
    border-radius: 5px; 
  }
  .btnhover:hover {
    background-color: white;
    color: #2a56c0;
  }
  h1{
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
  }
  .Rotas a {
    color: #00428c;
    text-decoration: none;
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
  }
`;
export const BotaoCentroAutomotivo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;
    padding: 2rem;
  
    & 
    img {
      width: 3rem;
      height: 3rem;
      padding-bottom: 0.5rem;
      
    }
    .botao{

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #00428c;
      font-weight: bold;
      padding: 1rem;
      
    }
    .botao:hover{
      background-color: #00428c;
      color: white;
      border-radius: 1rem;
      &
      img{
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

  grid-template-areas:
    "item1 item2 item5"
    "item3 item4 item5";

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  img:nth-child(1) {
    grid-area: item1;
  }

  img:nth-child(2) {
    grid-area: item2;
    
  }

  img:nth-child(3) {
    grid-area: item3;
  }

  img:nth-child(4) {
    grid-area: item4;
  }

  img:nth-child(5) {
    grid-area: item5;
  }
 
`;
