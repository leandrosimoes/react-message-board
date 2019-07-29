import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import MessageForm from '../message-form'
import MessagesList from '../messages-list'
import Title from '../shared/title'
import Observation from '../shared/observation'
import { theme } from '../../contants'
import store from '../../store'

const Wrapper = styled.div`
    background-color: #fff;
    color: #292929;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 60%;
    margin: 0 auto;
    font-family: ${theme.secondaryFont};
`

function App() {
    return (
        <Provider store={store}>
            <Wrapper>
                <Title>Leave a message for me!</Title>
                <MessageForm />
                <Observation>
                    Here you'll see just the last 6 messages, but don't worry, I'll see them all!
                </Observation>
                <MessagesList />
            </Wrapper>
        </Provider>
    )
}

export default App
