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
    background-color: ${props => props.backgroundColor || theme.primaryColor}
    color: ${props => props.backgroundColor || theme.secondaryColor}
    border-radius: 3px;
    margin-bottom: 5px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 5px 5px rgba(0,0,0,.2);
    transform: scale(.8);
    opacity: 0;
    animation: ${showAnimation} .3s ease-in-out forwards;
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
                {messages.map(message => <MessageListItem key={message.id}>{message.text}</MessageListItem>)}
            </MessagesListWrapper>
        </>
    )
}

export default MessagesList