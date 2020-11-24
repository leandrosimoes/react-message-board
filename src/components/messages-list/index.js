import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import actions from '~/actions'
import Loading from '~/components/shared/loading'

import { MessagesListWrapper, MessageListItem } from '~/components/messages-list/style'

export const MessagesList = props => {
    const loading = useSelector(state => state.loading)
    const messages = useSelector(state => state.messages)
    const dispatch = useDispatch()
    const { messages: propMessages = [] } = props
    const defaulMessage = {
        id: 0,
        text:
            'To leave a message for me, you must be logged in with your GitHub account. Just click the login button, authorize the application and wait!',
        userEmail: 'leandro.simoes@outlook.com',
        userName: 'Leandro Simões ',
        userPhoto: 'https://avatars0.githubusercontent.com/u/5066378?v=4',
    }

    useEffect(() => {
        dispatch(actions.fetchMessages())
    }, [dispatch])

    return (
        <>
            <MessagesListWrapper className='messages-list'>
                {loading ? <Loading>Fetching messages...</Loading> : null}
                {[defaulMessage, ...messages.slice(-10), ...propMessages].map(message => (
                    <MessageListItem key={message.id} className='messages-list-item'>
                        <div className='user-info'>
                            {<img src={message.userPhoto} alt='User profile pic' />}
                            {
                                <span>
                                    <strong>{message.userName}</strong>
                                    <br />
                                    <span className='user-email'>{message.userEmail}</span>
                                </span>
                            }
                        </div>
                        <span className='message-text'>{message.text}</span>
                    </MessageListItem>
                ))}
            </MessagesListWrapper>
        </>
    )
}

MessagesList.propTypes = {
    messages: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object)]),
}

MessagesList.defaultProps = {
    messages: [],
}

export default MessagesList
