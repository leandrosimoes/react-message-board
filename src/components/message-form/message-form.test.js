import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'

import { MessageForm } from '~/components/message-form'
import store from '~/store'

describe('messages-form.test.js', () => {
    let container
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container = null
    })

    test('<MessageForm /> sould render', () => {
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <MessageForm />
                </Provider>,
                container
            )
        })
        const messageForm = container.getElementsByClassName('message-form')[0]
        expect(messageForm).toBeTruthy()
    })

    test('<MessageForm /> sould render with no user', () => {
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <MessageForm />
                </Provider>,
                container
            )
        })
        const messageForm = container.getElementsByClassName('no-user')[0]
        expect(messageForm).toBeTruthy()

        const userInfo = container.getElementsByClassName('user-info')
        expect(userInfo).toHaveLength(0)
    })

    test('<MessageForm /> sould render with user', () => {
        const user = {}
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <MessageForm user={user} />
                </Provider>,
                container
            )
        })
        const messageForm = container.getElementsByClassName('with-user')[0]
        expect(messageForm).toBeTruthy()

        const userInfo = container.getElementsByClassName('user-info')[0]
        expect(userInfo).toBeTruthy()
    })

    test('<MessageForm /> => </Button /> enable and disabled behavior', () => {
        const user = {}
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <MessageForm user={user} />
                </Provider>,
                container
            )
        })
        const sendButton = container.getElementsByClassName('btn-send')[0]
        expect(sendButton.className).toContain('btn-send disabled')

        act(() => {
            const textInput = container.getElementsByTagName('input')[0]
            textInput.value = 'New Value'
            Simulate.change(textInput)
        })

        expect(sendButton.className).toContain('btn-send')
        expect(sendButton.className).not.toContain('disabled')
    })
})
