import firebase from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from './firebaseConfig'

// Initialize when loaded.
// If `window.__FINDY_FIREBASE_CONFIG__` defined, use one to be convenient for development mainly.
firebase.initializeApp(window.__FINDY_FIREBASE_CONFIG__ || firebaseConfig)

export * from './FirebaseAuthRepository'
export { FindyIdComponent } from './FindyIdComponent'
