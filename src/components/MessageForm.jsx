import React, { useState } from 'react'
import { DB, AUTH } from '../utility/MyFirebase'
import firebase from 'firebase/compat/app'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import '../css/MessageForm.css'

const MessageForm = () => {
  const [message, setMessage] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    const {uid, photoUrl} = AUTH.currentUser

    await DB.collection('messages').add({
      text: message,
      photoUrl,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage('')
  }

  return (
    <div>
      <Form className='form' onSubmit={sendMessage}>
        <InputGroup>
          <FormControl className='input-box' value={message} type='text' onChange={(e) => setMessage(e.target.value)} placeholder='Message...' />
          <Button className='send-button' type='submit'>Submit</Button>
        </InputGroup>
      </Form>
    </div>
  )
}

export default MessageForm