// src/styles/animation.js
import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
from {
    filter: blur(5px);
    opacity: 0;
}

to {
    filter: blur(0);
    opacity: 1;
}
`

const fadeOutKeyFrames = keyframes`
from {
    filter: blur(0);
    opacity: 1;
}

to {
    filter: blur(5px);
    opacity: 0;
}
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyFrames} ${type};`

export const fadeOut = ({ time = '1s', type = 'ease' } = {}) => css`
    animation: ${time} ${fadeOutKeyFrames} ${type};
`
