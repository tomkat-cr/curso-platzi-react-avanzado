// src/components/PhotoCard/styles.js

import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  text-align: left;
  text-decoration: none;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
`

// HTML5 Article is a HTML5 semantic element, similar to <section> and <header>.
// It is most commonly used to contain information that may be distributed
// independently from the rest of the site or application it appears in.
// Potential sources for the <article> element: Forum post, Blog post, News story
export const Article = styled.article`
    // Esto es para que el observer verifique bien la aparicion en pantalla, sino asume height=0 y los carga todos de una vex
    min-height: 200 px;
    // Si no se le pone el 200px sino solo '200', no funciona bien el observer...
`

export const ImageWrapper = styled.div`
    border-radius: 10px; // para que se vea mas moderno
    display: block;
    height: 0; // que sea cero para...
    overflow: hidden; // para que no se escape nada de lo que se ve en el componente
    padding: 56.25% 0 0 0; // empuja el contenido de la imagen hacia arriba y lo demas en cero para conservar la relacion de aspecto de todas las imagenes en la lista
    position: relative; // porque la imagen que ira dentro tendra una posicion absoluta
    width: 100%;
`

export const Img = styled.img`
  ${fadeIn({ time: '1s' })};
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2); // sombreado bastante suavecita
  height: 100%; // altura completa
  object-fit: cover; // que se adapte al espacio que tiene
  position: absolute; // porque lo que envuelve la imagen ya tiene una relacion de aspecto padding: 56.25%, o sea relacion 16:9
  top: 0;
  width: 100%; // que ocupe toda la horizontal
`
