import firebase from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from './firebaseConfig'

// initialize when loaded
firebase.initializeApp(firebaseConfig)

export * from './FirebaseAuthRepository'
export { FindyIdComponent } from './FindyIdComponent'
