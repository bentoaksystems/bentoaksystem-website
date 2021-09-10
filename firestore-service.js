import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCgEznAgq9aklfAMC43jHu4riVuTXIXSJQ',
  authDomain: 'test-project-3c1dd.firebaseapp.com',
  databaseURL: 'https://test-project-3c1dd.firebaseio.com',
  projectId: 'test-project-3c1dd',
  storageBucket: 'test-project-3c1dd.appspot.com',
  messagingSenderId: '986034417692',
  appId: '1:986034417692:web:a403d92d5e06537753afd9',
  measurementId: 'G-VZHJLWHX4B',
}
export const db = firebase.initializeApp(firebaseConfig).firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
