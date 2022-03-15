import Chat from './Chat'
import LogIn from './LogIn'
import { AUTH } from '../utility/MyFirebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const App = () => {
  const [user] = useAuthState(AUTH)

  return (
    <div>
      {user ? <Chat /> : <LogIn />}
    </div>
  )
}

export default App