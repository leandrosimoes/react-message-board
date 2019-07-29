import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import messagesReducer from '~/reducers'

export default createStore(messagesReducer, composeWithDevTools(applyMiddleware(reduxThunk)))
