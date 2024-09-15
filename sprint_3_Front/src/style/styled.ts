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
    font-weight: bold;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }
  
`

export const Header = styled.header`
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.5em;
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

