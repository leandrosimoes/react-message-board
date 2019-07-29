import { messagesDB as _messagesDB, auth as _auth, providers } from '~/firebase'

export const ACTION_TYPES = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    FETCH_MESSAGES: 'FETCH_MESSAGES',
    INIT_FETCH_MESSAGES: 'INIT_FETCH_MESSAGES',
    END_FETCH_MESSAGES: 'END_FETCH_MESSAGES',
    SET_USER: 'SET_USER',
}

export const addMessage = (messagesDB, message) => () => {
    messagesDB.push().set(message)
}

export const initFetchMessages = () => {
    return { type: ACTION_TYPES.INIT_FETCH_MESSAGES }
}

export const endFetchMessages = messages => {
    return { type: ACTION_TYPES.END_FETCH_MESSAGES, messages }
}

export const fetchMessages = messagesDB => async dispatch => {
    dispatch(initFetchMessages())

    messagesDB.on('value', snapshot => {
        dispatch(endFetchMessages(snapshot.val()))
    })
}

export const setUser = user => {
    return { type: ACTION_TYPES.SET_USER, user }
}

export const login = auth => async () => {
    await auth.signInWithRedirect(providers.github)
}

export const logout = auth => async () => {
    await auth.signOut()
}

export default {
    addMessage: addMessage.bind(null, _messagesDB),
    initFetchMessages,
    endFetchMessages,
    fetchMessages: fetchMessages.bind(null, _messagesDB),
    setUser,
    login: login.bind(null, _auth),
    logout: logout.bind(null, _auth),
}
