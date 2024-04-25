import "./Main.css";
const Main = () => {
  return (
    <main className="main">
      <div className="action">
        <section className="greeting">
          <h1>Welcome to Pro AI</h1>
          <h1>Chatbot</h1>
          <p>Start as a guest</p>
          <button>Go</button>
        </section>
        <section className="user-auth">
          <p>Start here, To save history</p>
          <div className="auth-btns">
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </section>
      </div>
      <div className="info">
        <nav className="nav">
            
        </nav>
        <footer className="footer">Footer</footer>
      </div>
    </main>
  );
}

export default Main;