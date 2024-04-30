import './Signup.css'
const Signup = () => {
  return (
    <div className='signup'>
      <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" />
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
          <p>An account with this email already exists</p>
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