// src/components/ListOfCategories/styles.js
import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex; // La propiedad de 'display flex', ayuda a colocar las cajas
  // como si fueran celdas de tablas, con un comportamiento predecible y adaptable.
  // Mozilla a estas cajas flexibles las llama el Diseño del Santo Grial.
  // flex soluciona problemas de control del diseño
  // y se adpata facilmente a los diferentes dispositivos.
  // La propiedad CSS flex es una propiedad resumida que indica la capacidad de un elemento
  // flexible para alterar sus dimensiones y llenar el espacio disponible.
  overflow: scroll; // si las actegorias no caben en la pantalla, hace scroll horizontal (por e flex)
  width: 100%;
  // Ahora se usa la propiedad 'fixed' en vez de la clase fixed
  // Cambiando: &.fixed {
  // Por: {props => props.fixed && css...
  ${props => props.fixed && css`
    ${fadeIn()};
    background: #fff;   // fondo blanco
    border-radius: 60px;    // bastante pronuciado
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); // efecto de profundidad con spmbras bastante difuminado
    left: 0;    // como va a estar flotando, debe quedar sin margenes...
    right: 0;
    margin: 0 auto; // left y right en 0 y margin: 0 auto; hacen que quede centrado
    max-width: 400px;
    padding: 5px;   // para que no quede muy pegado
    position: fixed;    // para que quede fijo cuando se haga scroll
    top: -20px; // que quede un poco mas pegado de arriba y wue no dejemos espacio
    transform: scale(.5);   // se reduce al 50% para que quede mas pequeño que el original
    z-index: 1; // para que quede por encima de los demas elementos
  `}
`

export const Item = styled.li`
  padding: 0 8px;
  // list-style-type: none // Para eliminar la bolita del bullet (ya se hace a nivel global)
`
