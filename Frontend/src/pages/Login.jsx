import './Login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div className="error-msg">
          <p>Wrong username or password</p>
        </div>
        <div className="button-container">
          <button>Login</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login