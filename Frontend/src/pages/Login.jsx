import './Login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div className="error-msg">
          <p>Wrong email or password</p>
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