import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import { MessagesList } from '~/components/messages-list'
import store from '~/store'

describe('messages-list.test.js', () => {
    let container
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container = null
    })

    test('<MessagesList /> sould render', () => {
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <MessagesList />
                </Provider>,
                container
            )
        })
        const messageItems = container.getElementsByClassName('messages-list')[0]
        expect(messageItems).toBeTruthy()
    })

    test('<MessagesList /> sould show messages properly', () => {
        const messages = [
            {
                id: 1,
                userName: 'Leandro',
                userEmail: 'leandro.simoes@outlook.com',
                text: 'My message 1!',
            },
            {
                id: 2,
                userName: 'Leandro 2',
                userEmail: 'leandro.simoes@outlook.com 2',
                text: 'My message 2!',
            },
        ]
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <MessagesList messages={messages} />
                </Provider>,
                container
            )
        })
        const messageItems = container.getElementsByClassName('messages-list-item')
        expect(messageItems).toHaveLength(3) // 3 because there is a default message that is automatically added to the list

        const [, message1, message2] = messageItems

        const userName = message1.getElementsByTagName('strong')[0]
        const userEmail = message1.getElementsByClassName('user-email')[0]
        const messageText = message1.getElementsByClassName('message-text')[0]
        expect(userName.textContent).toEqual(messages[0].userName)
        expect(userEmail.textContent).toEqual(messages[0].userEmail)
        expect(messageText.textContent).toEqual(messages[0].text)

        const userName2 = message2.getElementsByTagName('strong')[0]
        const userEmail2 = message2.getElementsByClassName('user-email')[0]
        const messageText2 = message2.getElementsByClassName('message-text')[0]
        expect(userName2.textContent).toEqual(messages[1].userName)
        expect(userEmail2.textContent).toEqual(messages[1].userEmail)
        expect(messageText2.textContent).toEqual(messages[1].text)
    })
})
