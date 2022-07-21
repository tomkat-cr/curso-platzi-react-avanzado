import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav` 
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;  // Para que quede fija como las categorias
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  height: 50px;
  width: 100%;
  max-width: 500px;
  left: 0; // Desde aqui...
  bottom: 0;
  right: 0;
  margin: 0 auto; // Hasta aqui... es para que quede bien centrado
  z-index: 1000; // Para que quede por encima de todo
  font-size: 32px;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #888;
  height: 100%;
  width: 100%;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`
