import './Greeting.css'
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <section className="greeting">
          <h1>Welcome to Pro AI</h1>
          <h1>Chatbot</h1>
          <p>Start as a guest</p>
          <Link to='/chatbot'>Go</Link>
    </section>
  );
}

export default Greeting