import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { act } from "react-dom/test-utils"

import { MessagesList } from '../messages-list'
import store from '../../store'

describe('messages-list.test.js', () => {
    let container
    beforeEach(() => {
      container = document.createElement("div")
      document.body.appendChild(container)
    })

    afterEach(() => {
      document.body.removeChild(container)
      container = null
    })

    test('<MessagesList /> sould render', () => {
      act(() => {
          ReactDOM.render(<Provider store={store}><MessagesList /></Provider>, container);
      });
      const message_items = container.getElementsByClassName('messages-list')[0]
      expect(message_items).toBeTruthy()
    })

    test('<MessagesList /> sould show messages properly', () => {
        const messages = [
          { id: 1, userName: 'Leandro', userEmail: 'leandro.simoes@outlook.com', text: 'My message 1!' },
          { id: 2, userName: 'Leandro 2', userEmail: 'leandro.simoes@outlook.com 2', text: 'My message 2!' },
        ]
        act(() => {
            ReactDOM.render(<Provider store={store}><MessagesList messages={messages} /></Provider>, container);
        });
        const message_items = container.getElementsByClassName('messages-list-item')
        expect(message_items.length).toEqual(2)
        
        let userName = message_items[0].getElementsByTagName('strong')[0]
        let userEmail = message_items[0].getElementsByClassName('user-email')[0]
        let messageText = message_items[0].getElementsByClassName('message-text')[0]
        expect(userName.textContent).toEqual(messages[0].userName)
        expect(userEmail.textContent).toEqual(messages[0].userEmail)
        expect(messageText.textContent).toEqual(messages[0].text)
        
        userName = message_items[1].getElementsByTagName('strong')[0]
        userEmail = message_items[1].getElementsByClassName('user-email')[0]
        messageText = message_items[1].getElementsByClassName('message-text')[0]
        expect(userName.textContent).toEqual(messages[1].userName)
        expect(userEmail.textContent).toEqual(messages[1].userEmail)
        expect(messageText.textContent).toEqual(messages[1].text)
    })
})