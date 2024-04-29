import CustomLink from './CustomLink';
import './Greeting.css'
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <section className="greeting">
          <h1>Welcome to Pro AI</h1>
          <h1>Chatbot</h1>
          <p>Start as a guest</p>
          <CustomLink to='/chatbot' bgColor="#06918d" txt='Go'/>
    </section>
  );
}

export default Greeting