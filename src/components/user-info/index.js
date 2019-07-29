import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import actions from '~/actions'

import { UserInfoWrapper, BtnLogout } from '~/components/user-info/style'

export const UserInfo = props => {
    const dispatch = useDispatch()
    const { user } = props

    function handleLogoutClick() {
        if (!user) return

        dispatch(actions.logout())

        window.location.reload(true)
    }

    return (
        <UserInfoWrapper className='user-info'>
            <small>Logged in as:</small>
            <div>
                <div>
                    <img src={user.photoURL} alt='User profile pic' />
                </div>
                <div className='user-info-column'>
                    <h5>{user.displayName}</h5>
                    <span>{user.email}</span>
                </div>
            </div>
            <BtnLogout type='button' onClick={handleLogoutClick}>
                Logout
            </BtnLogout>
        </UserInfoWrapper>
    )
}

UserInfo.propTypes = {
    user: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default UserInfo
