import styled from 'styled-components'
import { theme } from '../../contants'

export const MessageFormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const MessageFormNotLoggedInMessage = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: ${theme.secondaryColor};
    color: ${theme.primaryColor};
    display: flex;
    justify-content: space-between;
`

export const ButtonText = styled.span`
    line-height: 30px;
    padding-left: 5px;
`
