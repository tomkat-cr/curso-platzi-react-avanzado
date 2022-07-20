import styled from 'styled-components'

export const Button = styled.button`
    padding-top: 8px; // para separarlas verticalmente
    display: flex;
    align-items: center;
    & svg { // El '&' significa en sass "siguiendo el componente que le precede"
            // Y este bloque applica a los elementos de tipo svg (Scalable Vector Graphics)
        margin-right: 4px;
    }
`
