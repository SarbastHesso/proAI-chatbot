import { useContext, useState } from 'react'
import './Signup.css'
import { Context } from '../Context'
const Signup = () => {
  const {register, error} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  }
  return (
    <div className='signup'>
      <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="conf-password">Confirm password</label>
          <input type="password" />
        </div>
        <div className="checkbox-group">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">I accepts terms and conditions</label>
        </div>
        <div className="error-msg">
          <p>{error}</p>
        </div>
        <div className="button-container">
          <button>Sign up</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Signup