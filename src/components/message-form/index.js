import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from '../shared/button'
import TextInput from '../shared/textinput'
import UserInfo from '../user-info'
import actions from '../../actions'
import { theme } from '../../contants'
import { auth } from '../../firebase'

import { ButtonText, MessageFormNotLoggedInMessage, MessageFormWrapper } from './styles'

export const MessageForm = props => {
    const [message, setMessage] = useState('')
    const [canSend, setCanSend] = useState(false)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const textInput = useRef(null)

    useEffect(() => {
        auth.getRedirectResult().then(({ user }) => {
            !!user && dispatch(actions.setUser(user))
        })

        auth.onAuthStateChanged(user => {
            !!user && dispatch(actions.setUser(user))
        })
    }, [dispatch])

    useEffect(() => {
        setCanSend(!!message && !!user)
    }, [message, user])

    function handleChange(event) {
        setMessage(event.target.value)
    }

    function handleSendClick() {
        if (!message || !canSend) return

        const { displayName, photoURL, email } = user
        
        dispatch(actions.addMessage({ id: new Date().getTime(), text: message, userName: displayName, userPhoto: photoURL, userEmail: email }))

        setMessage('')

        textInput.current.focus()
    }

    function handleLoginClick() {
        if (!!props.user || !!user) return

        dispatch(actions.login())
    }

    if (!props.user && !user) {
        return (
            <MessageFormNotLoggedInMessage className="message-form no-user">
                <span>Sorry! You must be logged in so you can send messages.</span>
                <Button backgroundColor={theme.primaryColor} color={theme.secondaryColor} onClick={handleLoginClick} canClick={true}>
                    <FontAwesomeIcon icon={faGithub} size={'2x'} />
                    <ButtonText>Login with GitHub</ButtonText>
                </Button>
            </MessageFormNotLoggedInMessage>
        )
    }

    return (
        <>
            <UserInfo user={props.user || user} />
            <MessageFormWrapper className="message-form with-user">
                <TextInput type={'text'} ref={textInput} width={'85%'} value={message} onChange={handleChange} />
                <Button onClick={handleSendClick} canClick={canSend} className={!!message ? 'btn-send' : 'btn-send disabled'}>
                    Send
                </Button>
            </MessageFormWrapper>
        </>
    )
}

export default MessageForm
