import { Button } from 'react-bootstrap'
import React from 'react'
import { AUTH } from '../utility/MyFirebase'
import '../css/LogOut.css'

const LogOut = () => {
  return (
    <div>
      <Button className='log-out-button' onClick={() => AUTH.signOut()}>Sign Out</Button>
    </div>
  )
}

export default LogOut