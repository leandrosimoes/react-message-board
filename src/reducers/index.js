import { INITIAL_STATE } from '../store'
import { ACTION_TYPES } from '../actions'

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_USER:
            return { ...state, user: action.user }
        case ACTION_TYPES.ADD_MESSAGE:
            return { ...state, loading: true }
        case ACTION_TYPES.INIT_FETCH_MESSAGES:
            return { ...state, loading: true }
        case ACTION_TYPES.END_FETCH_MESSAGES:
            const { messages } = action
            let messagesArray = Object.keys(messages || {}).map(key => ({ id: messages[key].id, text: messages[key].text }))

            return { ...state, loading: false, messages: messagesArray.reverse().slice(0, 6)  }
        default:
            return state
    }
}