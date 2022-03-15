import React from 'react'
import firebase from 'firebase/compat/app'
import { AUTH } from '../utility/MyFirebase'
import { Button } from 'react-bootstrap'
import '../css/LogIn.css'
import chatIcon from '../css/images/chat-app-icon.png'

const LogIn = () => {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    AUTH.signInWithPopup(provider)
  }

  return (
    <div>
      <img src={chatIcon} alt='Chat Icon' className='log-in-icon' />
      <div className='log-in-container'>
        <Button className='log-in-button' onClick={signIn}>Sign In With Email</Button>
      </div>
    </div>
  )
}

export default LogIn