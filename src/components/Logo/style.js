import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'

export const Svg = styled.svg`
    display: flex;
    width: 100%;
    padding-bottom: 10px;
`

export const Link = styled(LinkRouter)`
    -webkit-tap-highlight-color: transparent;
    width: 100%;
`
