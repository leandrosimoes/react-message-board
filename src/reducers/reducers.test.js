import { INITIAL_STATE } from '../store'
import { ACTION_TYPES } from '../actions'
import reducer from '../reducers'

describe('reducers.test.js', () => {
    test('SET_USER', () => {
        const user = { name: 'NEW USER' }
        const next_state = reducer(INITIAL_STATE, { type: ACTION_TYPES.SET_USER, user })

        expect(next_state).toEqual({ ...INITIAL_STATE, user })
    })

    test('ADD_MESSAGE', () => {
        const next_state = reducer(INITIAL_STATE, { type: ACTION_TYPES.ADD_MESSAGE })
        expect(next_state).toEqual({ ...INITIAL_STATE, loading: true })
    })

    test('INIT_FETCH_MESSAGES', () => {
        const next_state = reducer(INITIAL_STATE, { type: ACTION_TYPES.INIT_FETCH_MESSAGES })
        expect(next_state).toEqual({ ...INITIAL_STATE, loading: true })
    })

    test('END_FETCH_MESSAGES', () => {
        const messages = {
            "-LhR_PuzH9HoTGx16vZU" : {
                "id" : 1560626441778,
                "text" : "To leave a message for me, you must be logged in with your GitHub account. Just click the login button, authorize the application and wait!",
                "userEmail" : "leandro.simoes@outlook.com",
                "userName" : "Leandro Simões ",
                "userPhoto" : "https://avatars0.githubusercontent.com/u/5066378?v=4"
            }
        }
        
        const transformed_messages = [{
            "id" : 1560626441778,
            "text" : "To leave a message for me, you must be logged in with your GitHub account. Just click the login button, authorize the application and wait!",
            "userEmail" : "leandro.simoes@outlook.com",
            "userName" : "Leandro Simões ",
            "userPhoto" : "https://avatars0.githubusercontent.com/u/5066378?v=4"
        }]
        const next_state = reducer(INITIAL_STATE, { type: ACTION_TYPES.END_FETCH_MESSAGES, messages })
        expect(next_state).toEqual({ ...INITIAL_STATE, loading: false, messages: transformed_messages })
    })
    
    test('default', () => {
        expect(reducer(undefined, { type: null })).toEqual(INITIAL_STATE)
    })
})