import styled from "styled-components"
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
  background-color: #F2F0EB; 
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`

export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`

export const MenuItem = styled.li`
  display: inline;
  &
  a{
    color:#27a1da;
    font-weight: lighter;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }
  
`
//HEADER
export const Header = styled.header`
  background-color: #F2F0EB;
  text-align: center;
  color: white;
  .Logo_Header{
    width: 12vw;
    padding: 1vw;
  }	
`
export const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to top, #EBEFF2, #F2F0EB);  
  height: 4vw;
  &
  img{
    bottom: 2vw;
  }
`

export const Nav = styled.nav`
  padding: 10px;
`

// ERROR
export const Layout404 = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  background-color: #2A56C0;
  color: white;
  text-align: center;
  font-size: 1.5em;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  & img {
    width: 40rem;
  }
  &
  a{
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }
`
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
    background-color: #999;}
    
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

  `
export const CarrosselLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  
  &
  h1{
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #00428C;
    font-weight: bold;
  }
  h2{
    font-size: 1.5rem;
  }
`

export const DecoracaoDevs = styled.div`
  position: absolute;
  top: 15rem;
  right: 0;
  opacity: 0.8;
  z-index: -9999;
  & img{
    width: 30vw;
  }
`;

export const DecoracaoDevs2 = styled.div`
  position: absolute;
  top: 15rem;
  left: 0;
  opacity: 0.8;
  z-index: -9999;
  & img{
    width: 30vw;
  }
`;
