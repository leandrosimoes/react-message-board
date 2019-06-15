import { createStore, applyMiddleware } from 'redux'
import messagesReducer from '../reducers'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const INITIAL_STATE = {
    messages: [],
    loading: true,
    user: null,
}

export default createStore(messagesReducer, composeWithDevTools(applyMiddleware(reduxThunk)))
