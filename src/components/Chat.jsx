import React, { useState, useEffect } from 'react'
import { DB } from '../utility/MyFirebase'
import LogOut from './LogOut'
import MessageForm from './MessageForm'
import '../css/Chat.css'

const Chat = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    DB.collection('messages').orderBy('cretaedAt').limit(50).onSnapshot((snapshot) => {
      // eslint-disable-next-line array-callback-return
      setMessages(snapshot.docs.map((doc) => {
        doc.data()
      }))
    })
  }, [])

  return (
    <div>
      <LogOut />
      {messages.map(({id, text, photoUrl}) => (
        <div className='reply-group' key={id}>
          <img src={photoUrl} alt='Profile' className='profile-picture' />
          <p className='reply'>{text}</p>
        </div>
      ))}
      <MessageForm />
    </div>
  )
}

export default Chat