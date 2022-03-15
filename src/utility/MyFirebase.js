import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgZoHIhHv__Pu4MrJcR3T-AILFNqgx4ZY",
  authDomain: "fir-tts-test.firebaseapp.com",
  databaseURL: "https://fir-tts-test-default-rtdb.firebaseio.com",
  projectId: "fir-tts-test",
  storageBucket: "fir-tts-test.appspot.com",
  messagingSenderId: "976961933409",
  appId: "1:976961933409:web:65f9b07ccd7f10f7d85a20",
}

firebase.initializeApp(firebaseConfig)

function getFirebaseRef(refPath) {
  return firebase.database().ref(refPath)
}

let exportObject = {
  getFirebaseRef: getFirebaseRef
}

export default exportObject