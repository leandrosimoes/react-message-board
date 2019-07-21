import { providers } from '../firebase'

import { 
    addMessage, 
    initFetchMessages, 
    fetchMessages, 
    endFetchMessages, 
    login,
    logout, 
    setUser, 
    ACTION_TYPES 
} from '../actions'

describe('actions.test.js', () => {
    test('addMessage', () => {
        const push = jest.fn()
        const set = jest.fn()

        const messagesDB = { push }
        messagesDB.push.mockImplementationOnce(() => ({ set }))

        const message = {}
        addMessage(messagesDB, message)()

        expect(push).toHaveBeenCalledTimes(1)
        expect(set).toHaveBeenCalledTimes(1)
    })

    test('initFetchMessages', () => {
        expect(initFetchMessages()).toEqual({ type: ACTION_TYPES.INIT_FETCH_MESSAGES })
    })

    test('fetchMessages', done => {
        const events = {}
        const on = jest.fn(event => {
            events[event] = jest.fn()
        })

        const dispatch = jest.fn(params => {
            expect(params).toEqual({ type: ACTION_TYPES.INIT_FETCH_MESSAGES })
            done()
        })

        const messagesDB = { on }

        fetchMessages(messagesDB)(dispatch)

        expect(messagesDB.on).toHaveBeenCalledTimes(1)
        expect(messagesDB.on).toHaveBeenCalledWith('value', expect.any(Function))
    })

    test('endFetchMessages', () => {
        expect(endFetchMessages()).toEqual({ type: ACTION_TYPES.END_FETCH_MESSAGES })
    })

    test('setUser', () => {
        const user = {}
        expect(setUser(user)).toEqual({ type: ACTION_TYPES.SET_USER, user })
    })

    test('login', () => {
        const signInWithRedirect = jest.fn()
        const auth = { signInWithRedirect }
        const dispatch = jest.fn()

        login(auth)(dispatch)

        expect(auth.signInWithRedirect).toHaveBeenCalledTimes(1)
        expect(auth.signInWithRedirect).toHaveBeenCalledWith(providers.github)
    })

    test('logout', () => {
        const signOut = jest.fn()
        const auth = { signOut }
        const dispatch = jest.fn()

        logout(auth)(dispatch)

        expect(auth.signOut).toHaveBeenCalledTimes(1)
    })
})