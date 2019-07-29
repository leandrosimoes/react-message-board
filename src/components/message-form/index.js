import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

import Button from '~/components/shared/button'
import TextInput from '~/components/shared/textinput'
import UserInfo from '~/components/user-info'
import actions from '~/actions'
import { theme } from '~/constants'
import { auth } from '~/firebase'

import {
    ButtonText,
    MessageFormNotLoggedInMessage,
    MessageFormWrapper,
} from '~/components/message-form/styles'

export const MessageForm = props => {
    const [message, setMessage] = useState('')
    const [canSend, setCanSend] = useState(false)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const textInput = useRef(null)
    const { user: propsUser } = props

    useEffect(() => {
        auth.getRedirectResult().then(({ user: authUser }) => {
            if (authUser) dispatch(actions.setUser(authUser))
        })

        auth.onAuthStateChanged(authUser => {
            if (authUser) dispatch(actions.setUser(authUser))
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

        dispatch(
            actions.addMessage({
                id: new Date().getTime(),
                text: message,
                userName: displayName,
                userPhoto: photoURL,
                userEmail: email,
            })
        )

        setMessage('')

        textInput.current.focus()
    }

    function handleLoginClick() {
        if (!!propsUser || !!user) return

        dispatch(actions.login())
    }

    if (!propsUser && !user) {
        return (
            <MessageFormNotLoggedInMessage className='message-form no-user'>
                <span>Sorry! You must be logged in so you can send messages.</span>
                <Button
                    backgroundColor={theme.primaryColor}
                    color={theme.secondaryColor}
                    onClick={handleLoginClick}
                    canClick>
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                    <ButtonText>Login with GitHub</ButtonText>
                </Button>
            </MessageFormNotLoggedInMessage>
        )
    }

    return (
        <>
            <UserInfo user={{ ...propsUser, ...user }} />
            <MessageFormWrapper className='message-form with-user'>
                <TextInput
                    type='text'
                    ref={textInput}
                    width='85%'
                    value={message}
                    onChange={handleChange}
                />
                <Button
                    onClick={handleSendClick}
                    canClick={canSend}
                    className={message ? 'btn-send' : 'btn-send disabled'}>
                    Send
                </Button>
            </MessageFormWrapper>
        </>
    )
}

MessageForm.propTypes = {
    user: PropTypes.oneOfType([PropTypes.any]),
}

MessageForm.defaultProps = {
    user: undefined,
}

export default MessageForm
