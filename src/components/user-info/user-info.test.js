import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { act } from "react-dom/test-utils"

import { UserInfo } from '../user-info'
import store from '../../store'

describe('user-info.test.js', () => {
    let container
    beforeEach(() => {
      container = document.createElement("div")
      document.body.appendChild(container)
    })

    afterEach(() => {
      document.body.removeChild(container)
      container = null
    })

    test('<UserInfo /> should mount', () => {
        act(() => {
            const user = {}
            ReactDOM.render(<Provider store={store}><UserInfo user={user} /></Provider>, container);
        });
        const user_info = container.getElementsByClassName('user-info')[0]
        expect(user_info).not.toBeFalsy()
    })

    test('<UserInfo /> should show user info properly', () => {
        const user = { displayName: 'Leandro', email: 'leandro.simoes@outlook.com' }
        act(() => {
            ReactDOM.render(<Provider store={store}><UserInfo user={user} /></Provider>, container);
        });
        const user_info = container.getElementsByClassName('user-info')[0]
        const user_name = user_info.getElementsByTagName('h5')[0]
        const user_email = user_info.getElementsByTagName('span')[0]

        expect(user_name.textContent).toEqual(user.displayName)
        expect(user_email.textContent).toEqual(user.email)
    })
})