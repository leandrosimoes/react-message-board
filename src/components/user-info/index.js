import React from 'react'
import styled from 'styled-components'
import { theme } from '../../contants'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions'

const UserInfoWrapper = styled.div`
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

const UserInfo = props => {
    const dispatch = useDispatch()
    const { user } = props

    function handleLogoutClick() {
        if (!user) return

        dispatch(logout())
    }

    return (
        <UserInfoWrapper>
            <small>Logged in as:</small>
            <div>
                <div>
                    <img src={user.photoURL} alt={'User profile pic'} />
                </div>
                <div className={'user-info-column'}>
                    <h5>{user.displayName}</h5>
                    <span>{user.email}</span>
                </div>
            </div>
            <a type='button' href='#' onClick={handleLogoutClick}>
                Logout
            </a>
        </UserInfoWrapper>
    )
}

export default UserInfo
