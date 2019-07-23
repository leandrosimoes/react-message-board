import React from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../actions'

import { UserInfoWrapper } from './style'

export const UserInfo = props => {
    const dispatch = useDispatch()
    const { user } = props

    function handleLogoutClick() {
        if (!user) return

        dispatch(actions.logout())

        window.location.reload(true)
    }

    return (
        <UserInfoWrapper className="user-info" >
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
