import styled from 'styled-components'
import { theme } from '../../../contants'

const Button = styled.button`
    background-color: ${props => props.backgroundColor || theme.primaryColor};
    color: ${props => props.color || theme.secondaryColor};
    padding: 10px 20px;
    text-align: center;
    border-radius: 3px;
    border: none;
    box-shadow: 0 1px 5px rgba(0,0,0,.2);
    cursor: pointer;
    transition: all .3s ease-in-out;
    outline: none;
    ${props => !!props.canClick ? 'pointer-events: all;' : 'pointer-events: none;'}
    ${props => !!props.canClick ? 'opacity: 1;' : 'opacity: .8;'}

    &:hover {
        box-shadow: 0 5px 5px rgba(0,0,0,.2);
    }
`

export default Button