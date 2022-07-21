// src/components/PhotoCardContent/styles.js

import styled, { css } from 'styled-components'
import { Link as LinkRouter } from '../Category/styles'

import { fadeIn } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`

export const Article = styled.article`
    display: flex;
    padding-right: 20px;
`

export const Column = styled.div`
    display: flex;
    padding-top: 8px;
    padding-left: 20px;
`

export const ImageWrapper = styled.div`
    border-radius: 10px; // para que se vea mas moderno
    display: block; // 
    height: 0; // que sea cero para...
    overflow: hidden; // para que no se escape nada de lo que se ve en el componente
    padding: 56.25% 0 0 0; // empuja el contenido de la imagen hacia arriba y lo demas en cero para conservar la relacion de aspecto de todas las imagenes en la lista
    position: relative; // porque la imagen que ira dentro tendra una posicion absoluta
    width: 100%;
    ${props => props.small && css`
      width: 50px;
      height: 50px;
      padding: 0px;
    `}
`

export const Img = styled.img`
  ${fadeIn({ time: '1s' })};
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2); // sombreado bastante suavecita
  height: 100%; // altura completa
  object-fit: cover; // que se adapte al espacio que tiene
  position: absolute; // porque lo que envuelve la imagen ya tiene una relacion de aspecto padding: 56.25%, o sea relacion 16:9
  top: 0;
  width: 100%; // que ocupe toda la horizontal
  ${props => props.small && css`
    width: 50px;
    height: 50px;
  `}
`

export const Button = styled.button`
    padding-top: 8px; // para separarlas verticalmente
    display: flex;
    align-items: center;
    & svg { // El '&' significa en sass "siguiendo el componente que le precede"
            // Y este bloque applica a los elementos de tipo svg (Scalable Vector Graphics)
        margin-right: 4px;
    }
`
export const User = styled.div`
    padding-top: 8px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
`

export const Category = styled.div`
    padding-top: 8px;
    /* padding-left: 10px; */
    padding-right: 10px;
    display: flex;
`

export const Description = styled.div`
    padding-top: 8px;
    display: flex;
`
