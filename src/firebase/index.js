import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import { firebaseCredentials } from '../credentials'

const app = firebase.initializeApp(firebaseCredentials)

export const database = firebase.database()
export const messagesDB = database.ref('messages')
export const auth = firebase.auth(app)
export const providers = {
    github: new firebase.auth.GithubAuthProvider(),
}
export const persistances = firebase.auth.Auth.Persistence
