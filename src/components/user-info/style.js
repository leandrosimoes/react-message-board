import styled from 'styled-components'
import { theme } from '~/constants'

export const BtnLogout = styled.button`
    background-color: transparent;
    border: none;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
    outline: none;
`

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 3px;
    padding: 10px 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    small {
        color: ${theme.disabledColor};
    }

    & > div {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        h5 {
            margin: 0;
        }

        img {
            max-width: 50px;
            border-radius: 50%;
        }

        .user-info-column {
            padding-left: 10px;
        }
    }

    a {
        font-size: 12px;
        text-align: right;
        text-decoration: none;
    }
`

export default { UserInfoWrapper, BtnLogout }
