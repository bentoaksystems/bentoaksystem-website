import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCSAyjOjmBWtNaEUSaMbFTO70z4hbUlhUc',
  authDomain: 'bos-website-84e11.firebaseapp.com',
  projectId: 'bos-website-84e11',
  storageBucket: 'bos-website-84e11.appspot.com',
  messagingSenderId: '586449931051',
  appId: '1:586449931051:web:629b1d6db8de23fa66d36e',
  measurementId: 'G-47GHGXNEZV'
}
export const db = firebase.initializeApp(firebaseConfig).firestore()
export const fileStorage = firebase.storage()
export const TaskState = firebase.storage.TaskState
export const timestamped = obj => ({...obj, created: firebase.firestore.FieldValue.serverTimestamp()})

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
