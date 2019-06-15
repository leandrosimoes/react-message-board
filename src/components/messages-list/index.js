import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { theme } from '../../contants'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMessages } from '../../actions'
import Loading from '../loading'

const MessagesListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const showAnimation = keyframes`
    from {
        transform: scale(.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`

const MessageListItem = styled.div`
    width: 100%;
    background-color: ${props => props.backgroundColor || theme.primaryColor};
    color: ${props => props.backgroundColor || theme.secondaryColor};
    border-radius: 3px;
    margin-bottom: 15px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transform: scale(0.8);
    opacity: 0;
    animation: ${showAnimation} 0.3s ease-in-out forwards;
    display: flex;
    flex-direction: column;

    .user-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid ${theme.disabledColor};
        padding-bottom: 10px;
        margin-bottom: 10px;

        span {
            font-size: 12px;
        }

        img {
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
`

const MessagesList = () => {
    const loading = useSelector(state => state.loading)
    const messages = useSelector(state => state.messages)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMessages())
    }, [dispatch])

    return (
        <>
            <MessagesListWrapper>
                {loading ? <Loading>Fetching messages...</Loading> : null}
                {messages.map(message => (
                    <MessageListItem key={message.id}>
                        <div className={'user-info'}>
                            {<img src={message.userPhoto} alt='User profile pic' />}
                            {
                                <span>
                                    <strong>{message.userName}</strong>
                                    <br />
                                    {message.userEmail}
                                </span>
                            }
                        </div>
                        {message.text}
                    </MessageListItem>
                ))}
            </MessagesListWrapper>
        </>
    )
}

export default MessagesList
