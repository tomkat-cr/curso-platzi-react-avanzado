import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

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
  color: #888; // Color gris
  height: 100%;
  width: 100%;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  // Al estar presente el atributo 'aria-current',
  // se agrega un punto al icono de la pagina corriente en el NavBar,
  // Y el icono se pone en color negro.
  // Asi queda con una experiencia nativa del dispositivo.
  &[aria-current] {
    color: #000; // Color negro
    &:after { // Pseudo elemento que se ubica luego del elemento del Link
      ${fadeIn({ time: '0.5s' })} // efecto de difuminado para el puntito
      content: '·'; // Punto que se agrega...
      position: absolute; // Para ubicarlo debajo del icono del Navbar
      bottom: 0; // Para ubicarlo debajo del icono del Navbar
      font-size: 34px;  // Para que resalte bastante
      line-height: 20px; // Para que quede con bastante margen
    }
  }
`
