import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../shared/button'
import TextInput from '../shared/textinput'
import styled from 'styled-components'
import { addMessage, login, setUser, logout } from '../../actions'
import { theme } from '../../contants'
import { auth } from '../../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const MessageFormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`
const MessageFormNotLoggedInMessage = styled.div`
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

const ButtonText = styled.span`
    line-height: 30px;
    padding-left: 5px;
`

const MessageForm = () => {
    const [message, setMessage] = useState('')
    const [canSend, setCanSend] = useState(false)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const textInput = useRef(null)

    useEffect(() => {
        auth.getRedirectResult().then(({ user }) => {
            !!user && dispatch(setUser(user))
        })

        auth.onAuthStateChanged(user => {
            !!user && dispatch(setUser(user))
        })
    }, [])

    useEffect(() => {
        setCanSend(!!message && !!user)
    }, [message, user])
    
    function handleChange(event) {
        setMessage(event.target.value)
    }

    function handleSendClick() {
        if (!message || !canSend) return

        dispatch(addMessage({ id: new Date().getTime(), text: message }))

        setMessage('')

        textInput.current.focus()
    }

    function handleLoginClick() {
        if (!!user) return

        dispatch(login())
    }

    function handleLogoutClick() {
        if (!user) return

        dispatch(logout())
    }

    if (!user) { 
        return (
            <MessageFormNotLoggedInMessage>
                <span>Sorry! You must be logged in so you can send messages.</span>
                <Button onClick={handleLoginClick} canClick={true}>
                    <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    <ButtonText>Login with GitHub</ButtonText>
                </Button>
            </MessageFormNotLoggedInMessage>
        )
    }

    return (
        <>
            <MessageFormWrapper>
                <TextInput type={"text"} ref={textInput} width={'75%'} value={message} onChange={handleChange}/>
                <Button onClick={handleSendClick} canClick={canSend}>Send</Button>
                <Button onClick={handleLogoutClick} canClick={true}>Logout</Button>
            </MessageFormWrapper>
        </>
    )
}

export default MessageForm