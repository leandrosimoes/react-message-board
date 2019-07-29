import { ACTION_TYPES } from '../actions'
import reducer, { INITIAL_STATE } from './index'

describe('reducers.test.js', () => {
    test('SET_USER', () => {
        const user = { name: 'NEW USER' }
        const nextState = reducer(INITIAL_STATE, { type: ACTION_TYPES.SET_USER, user })

        expect(nextState).toEqual({ ...INITIAL_STATE, user })
    })

    test('ADD_MESSAGE', () => {
        const nextState = reducer(INITIAL_STATE, { type: ACTION_TYPES.ADD_MESSAGE })
        expect(nextState).toEqual({ ...INITIAL_STATE, loading: true })
    })

    test('INIT_FETCH_MESSAGES', () => {
        const nextState = reducer(INITIAL_STATE, { type: ACTION_TYPES.INIT_FETCH_MESSAGES })
        expect(nextState).toEqual({ ...INITIAL_STATE, loading: true })
    })

    test('END_FETCH_MESSAGES', () => {
        const messages = {
            '-LhR_PuzH9HoTGx16vZU': {
                id: 1560626441778,
                text:
                    'To leave a message for me, you must be logged in with your GitHub account. Just click the login button, authorize the application and wait!',
                userEmail: 'leandro.simoes@outlook.com',
                userName: 'Leandro Simões ',
                userPhoto: 'https://avatars0.githubusercontent.com/u/5066378?v=4',
            },
        }

        const transformedMessages = [
            {
                id: 1560626441778,
                text:
                    'To leave a message for me, you must be logged in with your GitHub account. Just click the login button, authorize the application and wait!',
                userEmail: 'leandro.simoes@outlook.com',
                userName: 'Leandro Simões ',
                userPhoto: 'https://avatars0.githubusercontent.com/u/5066378?v=4',
            },
        ]
        const nextState = reducer(INITIAL_STATE, {
            type: ACTION_TYPES.END_FETCH_MESSAGES,
            messages,
        })
        expect(nextState).toEqual({
            ...INITIAL_STATE,
            loading: false,
            messages: transformedMessages,
        })
    })

    test('default', () => {
        expect(reducer(undefined, { type: null })).toEqual(INITIAL_STATE)
    })
})
