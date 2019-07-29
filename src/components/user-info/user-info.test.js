import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import { UserInfo } from './index'
import store from '../../store'

describe('user-info.test.js', () => {
    let container
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container = null
    })

    test('<UserInfo /> should mount', () => {
        act(() => {
            const user = {}
            ReactDOM.render(
                <Provider store={store}>
                    <UserInfo user={user} />
                </Provider>,
                container
            )
        })
        const userInfo = container.getElementsByClassName('user-info')[0]
        expect(userInfo).not.toBeFalsy()
    })

    test('<UserInfo /> should show user info properly', () => {
        const user = { displayName: 'Leandro', email: 'leandro.simoes@outlook.com' }
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <UserInfo user={user} />
                </Provider>,
                container
            )
        })
        const userInfo = container.getElementsByClassName('user-info')[0]
        const userName = userInfo.getElementsByTagName('h5')[0]
        const userEmail = userInfo.getElementsByTagName('span')[0]

        expect(userName.textContent).toEqual(user.displayName)
        expect(userEmail.textContent).toEqual(user.email)
    })
})
