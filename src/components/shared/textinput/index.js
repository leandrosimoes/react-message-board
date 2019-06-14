import styled from 'styled-components'
import { theme } from '../../../contants'

const TextInput = styled.input`
    border: 1px solid ${theme.primaryColor};
    background-color: #fff;
    color: ${theme.primaryColor};
    border-radius: 3px;
    width: ${props => props.width || '100%'};
    max-width: ${props => props.width || '100%'};
    min-width: ${props => props.width || '100%'};
    height: 40px;
    min-height: 40px;
    max-height: 40px;
    line-height: 40px;
    outline: none;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
`

export default TextInput