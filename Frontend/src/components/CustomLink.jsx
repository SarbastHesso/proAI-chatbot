import { Link } from 'react-router-dom';
import './CustomLink.css'

const CustomLink = ({to, txt, bgColor, onClick}) => {
    const linkStyle = {backgroundColor: bgColor}
    if (onClick) {
      return (
        <div className="custom-link">
          <button className="custom-link" style={linkStyle} onClick={onClick}>{txt}</button>
        </div>
      );
    }
  return (
    <div className='custom-link'>
        <Link to={to} style={linkStyle}>{txt}</Link>
    </div>
  )
}

export default CustomLink;