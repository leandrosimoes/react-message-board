import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../actions'
import Loading from '../shared/loading'

import { MessagesListWrapper, MessageListItem } from './style'

export const MessagesList = props => {
    const loading = useSelector(state => state.loading)
    const messages = useSelector(state => state.messages)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.fetchMessages())
    }, [dispatch])

    return (
        <>
            <MessagesListWrapper className="messages-list">
                {loading ? <Loading>Fetching messages...</Loading> : null}
                {(props.messages || messages).map(message => (
                    <MessageListItem key={message.id} className="messages-list-item">
                        <div className={'user-info'}>
                            {<img src={message.userPhoto} alt='User profile pic' />}
                            {
                                <span>
                                    <strong>{message.userName}</strong>
                                    <br />
                                    <span className="user-email">{message.userEmail}</span>
                                </span>
                            }
                        </div>
                        <span className="message-text">{message.text}</span>
                    </MessageListItem>
                ))}
            </MessagesListWrapper>
        </>
    )
}

export default MessagesList
