import firebase from 'firebase'
import { firebaseConfig } from './config.js'

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firebaseDb = firebaseApp.database()
export const firebaseSt = firebaseApp.storage()