import { Link } from 'react-router-dom';
import './CustomLink.css'

const CustomLink = ({to, txt, bgColor}) => {
    const linkStyle = {backgroundColor: bgColor}
  return (
    <div className='custom-link'>
        <Link to={to} style={linkStyle}>{txt}</Link>
    </div>
  )
}

export default CustomLink;