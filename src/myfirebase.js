import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import firebaseConfig from './firebaseConfig'

initializeApp(firebaseConfig)

const db = getFirestore()

export {db}


