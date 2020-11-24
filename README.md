# ReactJS Message Board
### [Click here to se the result](https://messageboard-a3413.firebaseapp.com/)

Just a simple project made in ReactJS for study proposals. In this project
I'm using two apis from Firebase, Authentication API, using authentication with GitHub 
and Real Time Database API, used to store the messages.

Just get a look at the and leave me a message about what do you think about it [here](https://messageboard-a3413.firebaseapp.com/).

### Development

Create a `scr/credentials/index.js` file with your firebase credentials that you can get in your application settings at the [Firebase Console](https://console.firebase.google.com/). The file must follow this format:

```javascript
export const firebaseCredentials = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_DOMAIN.firebaseapp.com',
    databaseURL: 'https://YOUR_DOMAIN.firebaseio.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
}

export default {
    firebaseCredentials,
}

```