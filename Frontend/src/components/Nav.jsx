import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
        <div className='contact'>
            <Link to='mailto:info@proai.us'>Email: info@proai.us</Link>
            <Link to='tel:+4648088887'>Phone: +4648088887</Link>
            <Link to='https://proai.us/' target='blank'>Explore our website</Link>
        </div>
        <div className='legal'>
            <Link to='#'>Privacy</Link>
            <Link to='#'>Help</Link>
        </div>
    </nav>
  )
}

export default Nav;