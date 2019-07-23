import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { act, Simulate } from "react-dom/test-utils"

import { MessageForm } from '../message-form'
import store from '../../store'

describe('messages-form.test.js', () => {
    let container
    beforeEach(() => {
        container = document.createElement("div")
        document.body.appendChild(container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container = null
    })

    test('<MessageForm /> sould render', () => {
        act(() => {
            ReactDOM.render(<Provider store={store}><MessageForm /></Provider>, container);
        });
        const message_form = container.getElementsByClassName('message-form')[0]
        expect(message_form).toBeTruthy()
    })

    test('<MessageForm /> sould render with no user', () => {
        act(() => {
            ReactDOM.render(<Provider store={store}><MessageForm /></Provider>, container);
        });
        const message_form = container.getElementsByClassName('no-user')[0]
        expect(message_form).toBeTruthy()

        const user_info = container.getElementsByClassName('user-info')
        expect(user_info.length).toEqual(0)
    })

    test('<MessageForm /> sould render with user', () => {
        const user = {}
        act(() => {
            ReactDOM.render(<Provider store={store}><MessageForm user={user} /></Provider>, container);
        });
        const message_form = container.getElementsByClassName('with-user')[0]
        expect(message_form).toBeTruthy()

        const user_info = container.getElementsByClassName('user-info')[0]
        expect(user_info).toBeTruthy()
    })

    test('<MessageForm /> => </Button /> enable and disabled behavior', () => {
        const user = {}
        act(() => {
            ReactDOM.render(<Provider store={store}><MessageForm user={user} /></Provider>, container);
        });
        let send_button = container.getElementsByTagName('button')[0]
        expect(send_button.className).toContain('btn-send disabled')

        act(() => {
            const text_input = container.getElementsByTagName('input')[0]
            text_input.value = 'New Value'
            Simulate.change(text_input)
        })

        expect(send_button.className).toContain('btn-send')
        expect(send_button.className).not.toContain('disabled')
    })
})