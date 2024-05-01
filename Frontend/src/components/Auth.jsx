import './Auth.css'
import CustomLink from './CustomLink'

const Auth = () => {
  return (
    <section className="user-auth">
      <p>Start here, To save history</p>
      <div className="auth-btns">
      <CustomLink to='/login' bgColor='#0764b8' txt='Login'/>
      <CustomLink to='/signup' bgColor='#0764b8' txt='Sign Up'/>
      </div>
    </section>
  )
}

export default Auth