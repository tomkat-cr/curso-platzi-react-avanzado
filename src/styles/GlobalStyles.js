// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box; // usa el padding para calcular el ancho de los elementos
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; // usa la fuente por defecto del sistema operativo -apple-system
  }

  // Asegura que todos los elementos usen el border-box
  *, *:before, *:after {
    box-sizing: inherit;
  }

  // Se resetean todos los demas elementos para que no tengan margen
  // y que no tengan ningun estilo por defecto
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe; // como un gris
    height: 100vh; // la altura se fija como toda la altura del view-port
    margin: 0 auto; // se centra el body
    max-width: 500px; // mobile-first, maximo de 500 pixeles
    overscroll-behavior: none; // evita que el scroll tenga 'rebotes'
    width: 100%; 
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05); // mas bonito con pequeña sombra
    overflow-x: hidden; // overflow horizontal suprimido
    min-height: 100vh; // altura que sea 100% del view-port
    padding-bottom: 10px; // pequeño margen por debajo para que empuje el contenido
  }
`
