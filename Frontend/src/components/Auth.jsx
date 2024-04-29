import './Auth.css'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <section className="user-auth">
    <p>Start here, To save history</p>
    <div className="auth-btns">
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>Sign up</Link>
    </div>
  </section>
  )
}

export default Auth